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
        adress_custom: req.body.address,               // ✅ corrigido (mesmo com o typo)
        area: req.body.area,
        flooring: req.body.flooring,
        other_services: Array.isArray(req.body.otherServices)
          ? req.body.otherServices.join(';')
          : req.body.otherServices || '',
        message_custom: req.body.message
      }
    };

    console.log("📤 Enviando dados para HubSpot:", JSON.stringify(hubspotProperties, null, 2));

    // 3. Enviar para HubSpot
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
      console.error("❌ Erro na integração com HubSpot:", hubspotData);
      return res.status(500).json({
        error: 'Erro ao enviar para HubSpot.',
        hubspotError: hubspotData
      });
    }

    // 4. Sucesso
    res.status(201).json({
      message: 'Mensagem salva no MongoDB e enviada ao HubSpot!',
      hubspotId: hubspotData.id
    });

  } catch (err) {
    console.error("❌ Erro interno no submitContactForm:", err);
    res.status(500).json({
      error: 'Erro interno ao processar o formulário.',
      detail: err.message || err
    });
  }
};





