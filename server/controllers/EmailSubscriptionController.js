import EmailSubscriber from '../models/EmailSubscriber.js';
import fetch from 'node-fetch';

export const submitEmailSubscription = async (req, res) => {
  try {
    const { name, email } = req.body;

    // 1. Save to MongoDB
    const newSubscriber = new EmailSubscriber({ name, email });
    await newSubscriber.save();

    // 2. Respond immediately
    res.status(201).end();

    // 3. Send to HubSpot in background
    sendToHubspot({ name, email });

  } catch (err) {
    console.error("❌ Error saving subscription:", err);
    res.status(500).json({
      error: 'Failed to process email subscription.',
      detail: err.message || err
    });
  }
};

const sendToHubspot = async ({ name, email }) => {
  try {
    const payload = {
      properties: {
        email,
        firstname: name || '', // optional
        lifecycle_stage: 'subscriber' // optional: mark as subscriber
      }
    };

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('❌ HubSpot subscription error:', result);
    } else {
      console.log('✅ Subscriber sent to HubSpot:', result.id);
    }

  } catch (err) {
    console.error('❌ Error sending subscriber to HubSpot:', err);
  }
};
