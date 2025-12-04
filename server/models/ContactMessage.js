import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  area: String,
  flooring: String,
  otherServices: [String],
  message: String
}, {
  timestamps: true
});

const ContactMessage =
  mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;


