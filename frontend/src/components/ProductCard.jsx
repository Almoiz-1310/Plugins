import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, name, brand, price, image, rating, reviews } = product;

    return (
        <div className="product-card glass">
            <div className="product-image-container">
                <img src={image} alt={name} className="product-image" />
                <button className="add-to-cart-btn" aria-label="Add to Cart">
                    <ShoppingBag size={20} />
                </button>
            </div>

            <div className="product-info">
                <div className="product-meta">
                    <span className="product-brand">{brand}</span>
                    <div className="product-rating">
                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        <span>{rating}</span>
                    </div>
                </div>

                <Link to={`/product/${id}`} className="product-title-link">
                    <h3 className="product-title">{name}</h3>
                </Link>

                <div className="product-price-row">
                    <span className="product-price">${price.toLocaleString()}</span>
                    <Link to={`/product/${id}`} className="view-details-link">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
