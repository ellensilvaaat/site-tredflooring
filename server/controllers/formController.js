const Contact = require('../models/Contact');
const Sample = require('../models/Sample');

exports.submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    console.error('Erro ao salvar contato:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

exports.submitSample = async (req, res) => {
  try {
    const sample = new Sample(req.body);
    await sample.save();
    res.status(201).json({ message: 'Sample order submitted successfully' });
  } catch (err) {
    console.error('Erro ao salvar sample:', err);
    res.status(500).json({ error: 'Failed to submit sample form' });
  }
};

