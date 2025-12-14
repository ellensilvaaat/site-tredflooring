// src/components/Popup/EmailCapturePopup.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmailCapturePopup.css';

export default function EmailCapturePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // ✅ Mostrar apenas uma vez por sessão e apenas na home
  useEffect(() => {
    const hasShown = sessionStorage.getItem('emailPopupShown');
    if (!hasShown && window.location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('emailPopupShown', 'true');
      }, 10000); // 10 segundos após entrar na home
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/subscribe`, { name, email });
      setShowPopup(false);
      setShowThankYou(true);
    } catch (err) {
      console.error('❌ Subscription failed:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  // 🔁 Oculta tudo se nenhum popup deve aparecer
  if (!showPopup && !showThankYou) return null;

  return (
    <div className="popup-overlay" onClick={() => {
      setShowPopup(false);
      setShowThankYou(false);
    }}>
      <div className="popup-wrapper" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={() => {
          setShowPopup(false);
          setShowThankYou(false);
        }}>×</button>

        {showThankYou ? (
          <div className="thank-you-message">
            <h2>You're in the club!</h2>
            <p>Thanks for joining the Tred team.</p>
            <p>We’ll send you exclusive offers and expert flooring tips right to your inbox.</p>
            <p className="small-text">You can unsubscribe at any time.</p>
          </div>
        ) : (
          <div className="popup-content">
            <div className="popup-left">
              <img
                src="https://ik.imagekit.io/ijsd2xvnc/Group%2012%20(6).png"
                alt="Floor inspiration"
                className="popup-image"
              />
            </div>

            <div className="popup-right">
              <h2>
                New floors start with the <span className="highlight">right guidance.</span>
              </h2>
              <p>
                Sign up to receive exclusive offers, product updates, and expert advice tailored to your flooring project.
              </p>

              <form onSubmit={handleSubmit} className="popup-form">
                <input
                  type="text"
                  placeholder="John"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>

              <p className="popup-disclaimer">
                By subscribing, you agree to receive communications from Tred Flooring. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

