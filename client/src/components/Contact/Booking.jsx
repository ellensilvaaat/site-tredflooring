import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    area: 'Living',
    flooring: 'Carpet',
    otherServices: [],
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', address: '', phone: '' };

    if (!form.name.trim()) {
      newErrors.name = 'This field is required.';
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = 'This field is required.';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm(prev => {
      const updated = checked
        ? [...prev.otherServices, value]
        : prev.otherServices.filter(s => s !== value);
      return { ...prev, otherServices: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Redirecionamento direto
    navigate('/thank-you');
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-left">
          <h2>Let’s Talk About<br /><span>Your Project</span></h2>
          <p>
            From first chat to final installation, we make beautiful floors easy. 
            Visit, call, or message <span className="highlight">Tred</span> to begin.
          </p>

          <div className="contact-block">
            <p>📍 <strong>Visit Us</strong></p>
            <p>Supa Centa Moore , Ground Floor<br />2a Todman Ave, Kensington</p>
            <p><strong>Phone:</strong> (02) 8542 2249</p>
          </div>

          <div className="contact-block">
            <p>📧 <strong>Email Us</strong></p>
            <p>info@tredflooring.com.au</p>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Name + Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          {/* Address + Phone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={form.address} onChange={handleChange} />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* Area + Flooring */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <select id="area" name="area" value={form.area} onChange={handleChange}>
                <option value="Living">Living</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="flooring">Flooring</label>
              <select id="flooring" name="flooring" value={form.flooring} onChange={handleChange}>
                <option value="Carpet">Carpet</option>
                <option value="Hardwood">Hardwood</option>
                <option value="Vinyl">Vinyl</option>
                <option value="Laminate">Laminate</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Custom Rugs">Custom Rugs</option>
                <option value="Tile / Stone">Tile / Stone</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Other Services */}
          <div className="form-group full-width">
            <label>Other products / services you’re interested in</label>
            <div className="checkbox-group">
              {[
                'Custom Rugs',
                'TV Unit',
                'Wall Panels',
                'Sand & Polish',
                'Pavers'
              ].map(service => (
                <label key={service} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="otherServices"
                    value={service}
                    checked={form.otherServices.includes(service)}
                    onChange={handleCheckboxChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="form-group full-width">
            <label htmlFor="message">Tell us about your project</label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}



