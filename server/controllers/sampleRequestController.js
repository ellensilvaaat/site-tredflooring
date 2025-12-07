import SampleRequest from '../models/SampleRequest.js';
import fetch from 'node-fetch';
//import { sendLeadEmail } from '../utils/sendEmail.js';
export const submitSampleRequest = async (req, res) => {
  try {
    // 1. Salvar no MongoDB
    const newRequest = new SampleRequest(req.body);
    await newRequest.save();

    // 2. Responder imediatamente (sem payload, sem atrasar o usuário)
    res.status(201).end();
    // 3. Send email in background ✅ (commented for now)
    // sendLeadEmail(req.body);

    // 3. Processar envio ao HubSpot em background
    processSampleRequestInBackground(req.body);

  } catch (err) {
    console.error("❌ Erro ao salvar no MongoDB:", err);
    res.status(500).json({
      error: 'Erro ao processar o request.',
      detail: err.message || err
    });
  }
};


// ------------------------------
// FUNÇÃO DE BACKGROUND
// ------------------------------

const processSampleRequestInBackground = async (data) => {
  try {
    const { name, email, phone, samples, quotes } = data;

    const sampleText = samples.map(s => `${s.name} (${s.type})`).join('; ');
    const quoteText = quotes.map(q => `${q.name} - ${q.color} - ${q.size}`).join('; ');

    // 1. Procurar contato existente
    const searchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: "email",
            operator: "EQ",
            value: email
          }]
        }],
        properties: ["email"]
      })
    });

    const searchData = await searchResponse.json();

    // ------------------------------
    // SE CONTATO EXISTE → ATUALIZA
    // ------------------------------
    if (searchData.total > 0 && searchData.results?.[0]) {
      const contactId = searchData.results[0].id;

      const existingContact = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}?properties=samples_requested,quote_request`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
          }
        }
      );

      const existingData = await existingContact.json();

      const existingSamples = existingData.properties?.samples_requested || '';
      const existingQuotes = existingData.properties?.quote_request || '';

      const updatedSamples = [existingSamples, sampleText].filter(Boolean).join('; ');
      const updatedQuotes = [existingQuotes, quoteText].filter(Boolean).join('; ');

      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
          },
          body: JSON.stringify({
            properties: {
              samples_requested: updatedSamples,
              quote_request: updatedQuotes
            }
          })
        }
      );

      if (!updateResponse.ok) {
        console.error("❌ Erro ao atualizar contato HubSpot:", await updateResponse.text());
      } else {
        console.log("⚡ HubSpot atualizado para contato existente:", contactId);
      }

      return;
    }

    // ------------------------------
    // SENÃO → CRIA NOVO CONTATO
    // ------------------------------

    const createResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: name,
            phone,
            samples_requested: sampleText,
            quote_request: quoteText
          }
        })
      }
    );

    const createData = await createResponse.json();

    if (!createResponse.ok) {
      console.error("❌ Erro ao criar contato HubSpot:", createData);
    } else {
      console.log("⚡ Novo contato criado no HubSpot:", createData.id);
    }

  } catch (err) {
    console.error("❌ Erro inesperado ao processar HubSpot em background:", err);
  }
};
