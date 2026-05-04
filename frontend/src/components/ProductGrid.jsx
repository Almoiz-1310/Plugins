import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ title = "Featured Products", products: propProducts }) => {
    const [products, setProducts] = useState(propProducts || []);
    const [loading, setLoading] = useState(!propProducts);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (propProducts) return;

        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [propProducts]);

    if (loading) {
        return (
            <section className="product-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="loading-grid">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="skeleton-card"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="product-section">
                <div className="container">
                    <p className="error-message">Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="product-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{title}</h2>
                    <a href="/products" className="view-all-btn">View All</a>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
