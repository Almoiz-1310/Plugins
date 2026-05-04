import React from 'react';
import Hero from '../components/Hero';
import BrandCarousel from '../components/BrandCarousel';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <BrandCarousel />
            <ProductGrid title="New Arrivals" />
            <ProductGrid title="Best Sellers" />
        </div>
    );
};

export default Home;
