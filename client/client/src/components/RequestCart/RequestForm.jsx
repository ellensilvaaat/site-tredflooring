import React, { useState } from 'react';
import './SampleRequestPage.css';

export default function RequestForm({ form, onChange, onSubmit }) {
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
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
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
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
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
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
        {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
      </div>

      <div className="bnt-sub">
        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </div>
    </form>
  );
}

