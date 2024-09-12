import React from 'react';
import './Product.css';
import product_data from './product_data.jsx'; // Import the product data
import { useNavigate } from 'react-router-dom';
import BoltImage from '../Media/multicolouredcable.png';
import PlasticImage from '../Media/multicolouredplastic.png';
import CableImage from '../Media/multicoloured2.png';

const TextBox = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleImageClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the ProductDetailPage
  };

  // Combine all products from different categories into one array
  const combinedProducts = [
    ...product_data.boltSeals,
    ...product_data.cableSeals,
    ...product_data.plasticSeals,
  ];

  // Shuffle the combined products array
  const shuffledProducts = combinedProducts.sort(() => Math.random() - 0.5);

  return (
   
    <div className="text-box-container">
       <div className="grid-container">
      <div
        className="container323"
        onClick={() => handleNavigate('/bolt-seals')}
      >
        <div className="container323-text">Bolt Seals</div>
        <img
          src={BoltImage}
          alt="Bolt Seals Category"
          className="container323-image"
        />
      </div>

      <div
        className="container3231"
        onClick={() => handleNavigate('/cable-seals')}
      >
        <div className="container323-text">Cable Seals</div>
        <img
          src={CableImage}
          alt="Cable Seals Category"
          className="container323-image"
        />
      </div>

      <div
        className="container3232"
        onClick={() => handleNavigate('/plastic-seals')}
      >
        <div className="container323-text">Plastic Seals</div>
        <img
          src={PlasticImage}
          alt="Plastic Seals Category"
          className="container323-image"
        />
      </div>
      </div>

      <h1 className="products-title">Featured Products</h1>

      <div className="category-products">
        {shuffledProducts.map(product => (
          <div className="text-box" key={product.id} onClick={() => handleImageClick(product)}>
            <img src={product.thumb} alt={product.product_name} />
            <div className="product-description">{product.product_name}</div>
            <div className="product-price">{product.currency} {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
