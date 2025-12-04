import ContactMessage from '../models/ContactMessage.js';
import fetch from 'node-fetch';

export const submitContactForm = async (req, res) => {
  try {
    // 1. Salvar no MongoDB
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();

    // 2. Preparar os dados para o HubSpot
    const hubspotProperties = {
      properties: {
        email: req.body.email,
        firstname: req.body.name,
        phone: req.body.phone,
        address_custom: req.body.address,
        area: req.body.area,
        flooring: req.body.flooring,
        other_services: Array.isArray(req.body.otherServices)
          ? req.body.otherServices.join(';')
          : req.body.otherServices || '',
        message_custom: req.body.message
      }
    };

    // 3. Enviar ao HubSpot via API
    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify(hubspotProperties)
    });

    const hubspotData = await hubspotResponse.json();

    // 4. Tratar erros da HubSpot
    if (!hubspotResponse.ok) {
      return res.status(500).json({
        error: 'Erro ao enviar para HubSpot.',
        hubspotError: hubspotData
      });
    }

    // 5. Finalizar com sucesso
    res.status(201).json({
      message: 'Mensagem salva no MongoDB e enviada ao HubSpot!',
      hubspotId: hubspotData.id
    });

  } catch (err) {
    res.status(500).json({
      error: 'Erro interno ao processar o formulário.',
      detail: err.message || err
    });
  }
};



