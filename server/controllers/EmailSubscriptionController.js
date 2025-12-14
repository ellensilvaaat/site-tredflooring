import EmailSubscriber from '../models/EmailSubscriber.js';

export const submitEmailSubscription = async (req, res) => {
  try {
    const { name, email } = req.body;

    // 1. Save subscriber to MongoDB
    const newSubscriber = new EmailSubscriber({
      name,
      email
    });

    await newSubscriber.save();

    // 2. Respond immediately to frontend
    res.status(201).end();

  } catch (err) {
    console.error("❌ Error saving email subscription:", err);
    res.status(500).json({
      error: 'Failed to process email subscription.',
      detail: err.message || err
    });
  }
};
