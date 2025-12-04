import SampleRequest from '../models/SampleRequest.js';
import fetch from 'node-fetch';

export const submitSampleRequest = async (req, res) => {
  try {
    const { name, email, phone, samples, quotes } = req.body;

    // 1. Salvar no MongoDB
    const newRequest = new SampleRequest(req.body);
    await newRequest.save();

    // 2. Preparar dados para o HubSpot
    const sampleText = samples.map(s => `${s.name} (${s.type})`).join('; ');
    const quoteText = quotes.map(q => `${q.name} - ${q.color} - ${q.size}`).join('; ');

    // 3. Verificar se o contato já existe pelo e-mail
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

    // 4. Atualizar se já existe
    if (searchData.total > 0 && searchData.results?.[0]) {
      const contactId = searchData.results[0].id;

      // Buscar dados existentes
      const existingContact = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}?properties=samples_requested,quote_request`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
        }
      });

      const existingData = await existingContact.json();

      const existingSamples = existingData.properties?.samples_requested || '';
      const existingQuotes = existingData.properties?.quote_request || '';

      const updatedSamples = [existingSamples, sampleText].filter(Boolean).join('; ');
      const updatedQuotes = [existingQuotes, quoteText].filter(Boolean).join('; ');

      // Atualizar o contato
      const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
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
      });

      if (!updateResponse.ok) {
        const updateError = await updateResponse.text();
        throw new Error(`Erro ao atualizar: ${updateError}`);
      }

      return res.status(201).json({
        message: 'Sample/Quote request salva no MongoDB e atualizada no HubSpot!'
      });
    }

    // 5. Criar novo contato
    const createResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
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
    });

    const createData = await createResponse.json();

    if (!createResponse.ok) {
      throw new Error(`Erro ao criar contato: ${JSON.stringify(createData)}`);
    }

    return res.status(201).json({
      message: 'Sample/Quote request salva no MongoDB e enviada ao HubSpot!'
    });

  } catch (err) {
    res.status(500).json({
      error: 'Erro ao processar o request.',
      detail: err.message || err
    });
  }
};
