import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
