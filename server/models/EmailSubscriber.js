import mongoose from 'mongoose';

const emailSubscriberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
}, {
  timestamps: true
});

const EmailSubscriber = mongoose.models.EmailSubscriber || mongoose.model('EmailSubscriber', emailSubscriberSchema);
export default EmailSubscriber;
