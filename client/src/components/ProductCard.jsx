import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3535/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-700 font-Madimi mt-8">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-gray-700 font-Madimi">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="py-8 px-5">
      <h1 className="text-black font-Madimi text-left mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-lg shadow-lg p-5 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <div>
              <h3 className="text-lg font-Madimi text-gray-800">
                {product.name}
              </h3>
              <p className="text-black font-Madimi">
                Price:
                <span className="font-bold text-red-500">
                  {" " + "₹"} {product.price}{" "}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
