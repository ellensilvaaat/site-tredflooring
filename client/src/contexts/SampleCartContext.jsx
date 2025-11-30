// src/contexts/SampleCartContext.jsx
import React, { createContext, useState } from 'react';

export const SampleCartContext = createContext();

export function SampleCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quoteCart, setQuoteCart] = useState([]);  // ← novo

  const addSample = (sample) => {
    setCart(prev => [...prev, sample]);
  };

  const addQuote = (quoteItem) => {
    setQuoteCart(prev => [...prev, quoteItem]);
  };

  const removeSample = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const removeQuote = (id) => {
    setQuoteCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  
  const clearQuoteCart = () => {
    setQuoteCart([]);
  };

  return (
    <SampleCartContext.Provider value={{
      cart,
      quoteCart,
      addSample,
      addQuote,
      removeSample,
      removeQuote,
      clearCart,
      clearQuoteCart
    }}>
      {children}
    </SampleCartContext.Provider>
  );
}

