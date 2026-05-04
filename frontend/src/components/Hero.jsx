import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-badge">New Arrivals</span>
                    <h1>
                        Experience the <br />
                        <span className="text-gradient">Future of Mobile</span>
                    </h1>
                    <p>
                        Discover the latest smartphones from top brands.
                        Unmatched performance, stunning cameras, and premium design.
                    </p>
                    <div className="hero-btns">
                        <a href="/products" className="btn btn-primary">
                            Shop Now <ArrowRight size={20} />
                        </a>
                        <a href="/brands" className="btn btn-secondary">
                            View Brands
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* We'll use a placeholder or a generated image here later if needed */}
                    <div className="phone-mockup">
                        <div className="screen-content">
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="app-icons">
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
