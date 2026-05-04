import React, { useState, useEffect } from 'react';
import './BrandCarousel.css';

const BrandCarousel = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/brands');
                if (response.ok) {
                    const data = await response.json();
                    setBrands(data);
                }
            } catch (error) {
                console.error('Error fetching brands:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

    if (loading || brands.length === 0) return null;

    return (
        <section className="brand-section">
            <div className="container">
                <h2 className="section-title text-center">Trusted Brands</h2>
                <div className="brand-carousel">
                    <div className="brand-track">
                        {/* Double the brands for infinite scroll effect */}
                        {[...brands, ...brands].map((brand, index) => (
                            <div className="brand-item" key={index}>
                                <div className="brand-logo-container">
                                    <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
