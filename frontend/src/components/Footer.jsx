import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo-text">Mobile<span className="text-gradient">Magic</span></div>
                        <p className="footer-desc">
                            Your one-stop destination for the latest smartphones and accessories.
                            Experience the magic of technology.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">All Phones</a></li>
                            <li><a href="/brands">Brands</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Customer Care</h3>
                        <ul>
                            <li><a href="/support">Support Center</a></li>
                            <li><a href="/warranty">Warranty Policy</a></li>
                            <li><a href="/shipping">Shipping Info</a></li>
                            <li><a href="/returns">Returns</a></li>
                            <li><a href="/faq">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <span>123 Tech Avenue, Silicon Valley, CA</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="contact-icon" />
                            <span>support@mobilemagic.com</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mobile Magic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
