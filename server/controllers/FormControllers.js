import ContactMessage from '../models/ContactMessage.js';
import fetch from 'node-fetch';
//import { sendLeadEmail } from '../utils/sendEmail.js';

export const submitContactForm = async (req, res) => {
  try {
    // 1. Salvar no MongoDB
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();

    // 2. Responder imediatamente ao front-end (sem mensagem, sem delay)
    res.status(201).end(); // <-- direto, sem payload
    //sendLeadEmail(req.body);
    // 3. Enviar para HubSpot em background
    sendToHubspot(req.body);

  } catch (err) {
    console.error("❌ Erro ao salvar no MongoDB:", err);
    res.status(500).json({
      error: 'Erro ao processar o formulário.',
      detail: err.message || err
    });
  }
};

const sendToHubspot = async (data) => {
  try {
    const hubspotProperties = {
      properties: {
        email: data.email,
        firstname: data.name,
        phone: data.phone,
        adress_custom: data.address, // nome interno com typo, mas correto no HubSpot
        area: data.area,
        flooring: data.flooring,
        other_services: Array.isArray(data.otherServices)
          ? data.otherServices.join(';')
          : data.otherServices || '',
        message_custom: data.message
      }
    };

    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify(hubspotProperties)
    });

    const hubspotData = await hubspotResponse.json();

    if (!hubspotResponse.ok) {
      console.error("❌ Erro ao enviar para HubSpot:", hubspotData);
    } else {
      console.log("✅ Dados enviados para HubSpot. ID:", hubspotData.id);
    }

  } catch (err) {
    console.error("❌ Erro inesperado ao enviar para HubSpot:", err);
  }
};




