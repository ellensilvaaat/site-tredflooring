import ContactMessage from '../models/ContactMessage.js';
import fetch from 'node-fetch';

export const submitContactForm = async (req, res) => {
  try {
    // 1. Salvar no MongoDB
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();

    // 2. Preparar os dados para o HubSpot com os nomes internos corretos
    const hubspotProperties = {
      properties: {
        email: req.body.email,                     // ok
        firstname: req.body.name,                 // ok
        phone: req.body.phone,                    // ok
        address_custom: req.body.address,         // custom field ✅
        area: req.body.area,                      // dropdown ✅
        flooring: req.body.flooring,              // dropdown ✅
        
        // ⚠️ Use o *internal name* exato que aparece no HubSpot, incluindo casing
        Other_Services: Array.isArray(req.body.otherServices)
          ? req.body.otherServices.join(';')      // transforma array em string separada por ;
          : req.body.otherServices || '',

        message_custom: req.body.message          // custom field ✅
      }
    };

    // Debug opcional:
    console.log("🔎 Enviando para HubSpot:", JSON.stringify(hubspotProperties, null, 2));

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

    // 4. Tratar erros da HubSpot com mais informações no log
    if (!hubspotResponse.ok) {
      console.error("❌ Erro na integração com HubSpot:", hubspotData);
      return res.status(500).json({
        error: 'Erro ao enviar para HubSpot.',
        hubspotError: hubspotData
      });
    }

    // 5. Sucesso
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





