import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container">
                <h1 className="section-title">All Mobile Phones</h1>
                <ProductGrid title="" />
            </div>
        </div>
    );
};

export default Products;
