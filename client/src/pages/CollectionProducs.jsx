import React from 'react';
import { Helmet } from 'react-helmet-async';
import CollectionProducts from "../components/Products/CollectionProducts.jsx";
import Footer from '../components/Home/Footer';

export default function CollectionProduct() {
  return (
    <>
      <Helmet>
        <title>Collections | Tred Flooring</title>
        <meta
          name="description"
          content="Browse Tred Flooring's curated product collections. Discover our flooring designs, textures, and finishes tailored for every space and style."
        />
        <meta
          name="keywords"
          content="flooring collections, product lines, Tred designs, timber textures, luxury floors, australian flooring products"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/collections" />
      </Helmet>

      <CollectionProducts />
      <Footer />
    </>
  );
}
