import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import contactRoutes from './routes/contactRoutes.js';
import requestRoutes from './routes/sampleRequestRoutes.js';
import emailSubscriptionRoutes from './routes/emailSubscriptionRoutes.js'; // ✅ Nova rota

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ CORS config
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://tredflooring.com.au', 'https://www.tredflooring.com.au']
    : '*',
  credentials: true
}));

app.use(express.json());

// ✅ Rotas
app.use('/api', contactRoutes);
app.use('/api', requestRoutes);
app.use('/api', emailSubscriptionRoutes); // ✅ Aqui está a nova rota do popup

// ✅ Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectado');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  });


