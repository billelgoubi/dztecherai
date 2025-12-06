import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">خدماتنا ومنتجاتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
