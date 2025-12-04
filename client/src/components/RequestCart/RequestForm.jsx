import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SampleRequestPage.css';
import axios from 'axios';

export default function RequestForm({ form, onChange, sampleCart, quoteCart }) {
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'This field is required.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email.';
      valid = false;
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!/^\d{9,10}$/.test(phoneDigits)) {
      newErrors.phone = 'Please enter a valid Australian phone number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        samples: sampleCart,
        quotes: quoteCart
      };

      console.log("📦 Enviando payload:", payload);

      await axios.post('http://localhost:4000/api/request', payload);

      navigate('/thank-you');
    } catch (error) {
      console.error("❌ Failed to submit request:", error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <form className="sample-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          style={errors.name ? { borderColor: 'red' } : {}}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          style={errors.email ? { borderColor: 'red' } : {}}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={onChange}
          style={errors.phone ? { borderColor: 'red' } : {}}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="bnt-sub">
        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </div>
    </form>
  );
}




