import React from 'react';
import { Product, ProductType } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isFree = product.type === ProductType.FREE_PRODUCT;
  
  const buttonClasses = isFree 
    ? "bg-green-500 hover:bg-green-600"
    : "bg-cyan-500 hover:bg-cyan-600";

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.title} />
        {product.discount && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
            خصم {product.discount}%
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
        <p className="text-gray-400 text-base flex-grow mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          {product.price !== undefined ? (
            <div className="text-lg font-bold text-cyan-400">
              <span className="text-sm font-normal text-gray-400">{product.pricePrefix} </span>
              {product.price.toLocaleString('ar-DZ')} دج
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.originalPrice.toLocaleString('ar-DZ')} دج
                </span>
              )}
            </div>
          ) : (
            <div className="text-lg font-bold text-green-400">مجاني</div>
          )}
        </div>
        <a
          href={product.actionLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center text-white font-bold py-2 px-4 rounded transition duration-300 ${buttonClasses}`}
        >
          {product.actionText}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
