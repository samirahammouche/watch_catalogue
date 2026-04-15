import React, { useState } from "react";
import "./ProductsList.css";

const ProductsList = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(products);
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === "") {
            setSearchResults(products);
        } else {
            const filtered = products.filter((product) =>
                product.brand.toLowerCase().includes(term.toLowerCase()) ||
                product.model.toLowerCase().includes(term.toLowerCase()),
            );
            setSearchResults(filtered);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);
    };

    
    const getWatchImage = (productName) => {
         
        const images = {
            "Seamaster Diver 300M":
                "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
            "Royal Oak Automatic":
                "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
            "Submariner Date":
                "https://i.ytimg.com/vi/XKuIrWeX_5c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEWmznGENvS570DVOhefXzzi-wUg",
        };
 
        return images[productName] || "";
    };

    return (
        <div className="products-container">
            {expandedProductId && (
                <div 
                    className="hover-overlay"
                />
            )}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search timepieces by name.."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <p className="products-count">
                    Showing {searchResults.length} timepieces
                </p>
            </div>

            <div className="products-grid">
                {searchResults.map((product) => {
                    const image_url =
                        product.image_url || getWatchImage(product.brand + " " + product.model);

                    return (
                        <div 
                            key={product.id} 
                            className={`product-card ${expandedProductId === product.id ? 'expanded' : ''}`}
                        >
                            {expandedProductId === product.id && (
                                <button 
                                    className="close-btn" 
                                    onClick={() => setExpandedProductId(null)}
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            )}
                            <div className="product-image">
                                {image_url ? (
                                    <img src={image_url} alt={product.brand + " " + product.model} />                                ) : (
                                    <div className="image-placeholder">
                                        <span>Image not available</span>
                                    </div>
                                )}
                            </div>

                            <div className="product-info">
                                <h3 className="product-name">{product.brand} {product.model}</h3>
                                <p className="product-description">
                                    {product.description.length > 100
                                        ? `${product.description.substring(0, 100)}...`
                                        : product.description}
                                </p>
                                <div className="product-footer">
                                    <span className="product-price">
                                        {formatPrice(product.price)}
                                    </span>
                                    <button 
                                        className="view-btn"
                                        onClick={() => setExpandedProductId(product.id)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsList;
