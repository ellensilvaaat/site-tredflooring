// models/SampleRequest.js
import mongoose from 'mongoose';

const sampleRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  samples: [mongoose.Schema.Types.Mixed],  // aceita qualquer estrutura de objeto
  quotes: [mongoose.Schema.Types.Mixed],
}, {
  timestamps: true
});

const SampleRequest = mongoose.models.SampleRequest || mongoose.model('SampleRequest', sampleRequestSchema);
export default SampleRequest;
