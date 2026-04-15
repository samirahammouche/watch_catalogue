import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";

function App() {
    const [currentPage, setCurrentPage] = useState("view");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load all watches from the database when the app starts
    useEffect(() => {
        api.get("/watches/")
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Could not connect to the server. Make sure the backend is running.");
                setLoading(false);
            });
    }, []);

    // Save a new watch to the database
    const addProduct = (newProduct) => {
        api.post("/watches/", newProduct)
            .then((res) => {
                setProducts((prev) => [res.data, ...prev]);
                setCurrentPage("view");
            })
            .catch(() => {
                alert("Failed to add product. Make sure the backend is running.");
            });
    };

    return (
        <div className="App">
            <header className="header">
                <h1 className="logo">CHRONOS</h1>
                <nav className="nav">
                    <button
                        className={`nav-btn ${currentPage === "add" ? "active" : ""}`}
                        onClick={() => setCurrentPage("add")}
                    >
                        Add Product
                    </button>
                    <button
                        className={`nav-btn ${currentPage === "view" ? "active" : ""}`}
                        onClick={() => setCurrentPage("view")}
                    >
                        View Products
                    </button>
                </nav>
            </header>

            <main className="main-content">
                {currentPage === "add" ? (
                    <AddProduct onAddProduct={addProduct} />
                ) : loading ? (
                    <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading watches...</p>
                ) : error ? (
                    <p style={{ textAlign: "center", color: "red", marginTop: "2rem" }}>{error}</p>
                ) : (
                    <ProductsList products={products} />
                )}
            </main>
        </div>
    );
}

export default App;