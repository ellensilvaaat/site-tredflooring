// src/contexts/SampleCartContext.jsx

import React, { createContext, useState } from 'react';

export const SampleCartContext = createContext();

export function SampleCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addSample = (sample) => {
    setCart((prev) => [...prev, sample]);
  };

  const removeSample = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <SampleCartContext.Provider value={{ cart, addSample, removeSample, clearCart }}>
      {children}
    </SampleCartContext.Provider>
  );
}
