import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAddProduct }) => {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        description: "",
        price: "",
        image_url: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const newErrors = {};

        if (!formData.brand.trim()) {
            newErrors.brand = "Product brand is required";
        }
        if (!formData.model.trim()) {
            newErrors.model = "Product model is required";
        }
        if (!formData.description.trim()) {
            newErrors.description = "Description is required";
        }

        if (!formData.price) {
            newErrors.price = "Price is required";
        } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
            newErrors.price = "Price must be a positive number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
        onAddProduct({
            brand:       formData.brand.trim(),
            model:       formData.model.trim(),
            description: formData.description.trim(),
            price:       parseFloat(formData.price),
            image_url:   formData.image_url.trim(),
        });

            setSuccessMessage("Product added successfully!");
            setFormData({
                brand: "",
                model: "",
                description: "",
                price: "",
                image_url: "",
            });

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        }
    };

    return (
        <div className="add-product-container">
            <div className="add-product-card">
                <h2 className="form-title">Add New Timepiece</h2>
                <p className="form-subtitle">
                    Expand your collection with excellence
                </p>

                {successMessage && (
                    <div className="success-message">{successMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="brand">Product Brand</label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="e.g., Seamaster Professional 300M"
                            className={errors.brand ? "error" : ""}
                        />
                        {errors.brand && (
                            <span className="error-message">{errors.brand}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="model">Product Model</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            placeholder="e.g., Diver 300M"
                            className={errors.model ? "error" : ""}
                        />
                        {errors.model && (
                            <span className="error-message">{errors.model}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter a detailed description of the product"
                            rows="4"
                            className={errors.description ? "error" : ""}
                        />
                        {errors.description && (
                            <span className="error-message">
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="e.g., 199.99"
                            className={errors.price ? "error" : ""}
                        />
                        {errors.price && (
                            <span className="error-message">
                                {errors.price}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="image_url">Image URL</label>
                        <input
                            type="text"
                            id="image_url"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                           placeholder="https://example.com/watch-image.jpg"
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
