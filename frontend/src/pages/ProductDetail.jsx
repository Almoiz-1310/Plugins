import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div style={{ paddingTop: '120px', minHeight: '60vh' }}>
            <div className="container">
                <h1>Product Detail: {id}</h1>
                <p>This is a placeholder for product details.</p>
            </div>
        </div>
    );
};

export default ProductDetail;
