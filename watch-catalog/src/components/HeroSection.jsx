import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* Background Image Container */}
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-container">
                {/* Left Side - Text Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Since 1975
                    </div>

                    <h1 className="hero-title">
                        CHRONOS
                        <span className="title-highlight"> Watches</span>
                    </h1>

                    <div className="hero-tagline">
                        <svg
                            className="tagline-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M12 8V12L14 14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span>"TIMELESS ELEGANCE FOR EVERY MOMENT"</span>
                    </div>

                    <p className="hero-description">
                        Discover our curated collection of luxury timepieces,
                        where precision meets artistry. Each watch tells a
                        unique story of craftsmanship and innovation.
                    </p>

                    {/* Features Grid */}
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 8V12L14 14"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <span className="feature-text">
                                PRECISION CRAFTSMANSHIP
                            </span>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 12V8H4V12M20 12V16H4V12M20 12H4M2 4H22M6 4V8M18 4V8"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <span className="feature-text">
                                LIFETIME WARRANTY
                            </span>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M3 6H21M6 3V6M18 3V6M5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M8 13H16M8 17H12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <span className="feature-text">
                                FREE SHIPPING WORLDWIDE
                            </span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <button className="btn-primary">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 5V19M5 12H19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            Browse Collection
                        </button>
                    </div>
                </div>

                {/* Right Side - Empty for Background Image */}
                <div className="hero-image-area">
                    {/* Background image will show here */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 5V19M12 19L5 12M12 19L19 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
