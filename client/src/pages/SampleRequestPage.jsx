import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleCartContext } from '../contexts/SampleCartContext';
import CartPreview from '../components/RequestCart/CartPreview';
import RequestForm from '../components/RequestCart/RequestForm';
import '../components/RequestCart/SampleRequestPage.css';
import Hero_Samples from '../components/RequestCart/Hero_Samples';
import Footer from '../components/Home/Footer';

export default function SampleRequestPage() {
  const navigate = useNavigate();
  const {
    cart: sampleCart,
    quoteCart,
    removeSample,
    removeQuote,
    clearCart,
    clearQuoteCart
  } = useContext(SampleCartContext);

  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert('Please fill all required fields.');
      return;
    }

    if (sampleCart.length === 0 && quoteCart.length === 0) {
      alert('Your request is empty.');
      return;
    }

    console.log('Submitting request:', { form, sampleCart, quoteCart });

    clearCart();
    clearQuoteCart();
    alert('Request sent successfully!');
    navigate('/');
  };

  return (
    <div className="sample-request-page">
      <Hero_Samples />

      <div className="sample-request-container">
        <h1>Request Samples / Quotes</h1>

        <CartPreview
          sampleCart={sampleCart}
          quoteCart={quoteCart}
          onRemoveSample={removeSample}
          onRemoveQuote={removeQuote}
        />

        <div className="extra-buttons">
          <button onClick={() => navigate('/products')} className="back-btn">
            ← Choose more samples / units
          </button>
        </div>

       <RequestForm
  form={form}
  onChange={handleFormChange}
  sampleCart={sampleCart}
  quoteCart={quoteCart}
  onSubmit={handleSubmit}
/>
      </div>
      <Footer />
    </div>
  );
}
