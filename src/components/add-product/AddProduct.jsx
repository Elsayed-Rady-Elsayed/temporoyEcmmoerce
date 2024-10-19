import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux-toolkit/slices/productReducer";
import { useState, useEffect } from "react";
import { PRODUCTS_ROUTE, SUBCATEGORIES_ROUTE } from "../../utils/constants"; // Add SUBCATEGORIES_ROUTE
import apiClient from "@/lib/api-client.js";

export default function AddProduct() {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    imageURL: "",
    subCategory: "",
  });

  const [subCategories, setSubCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await apiClient.get(SUBCATEGORIES_ROUTE, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSubCategories(response.data);
      } catch (error) {
        setError("Failed to load subcategories: " + error.message);
      }
    };

    if (token) {
      fetchSubCategories();
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Token not found!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post(PRODUCTS_ROUTE, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        dispatch(addProduct(productData));
        console.log("Product added successfully:", productData);

        // Reset form fields
        setProductData({
          title: "",
          price: "",
          description: "",
          imageURL: "",
          subCategory: "", // Reset subcategory
        });
      }
    } catch (error) {
      setError("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Add w-[80%] m-auto h-[]">
      <form onSubmit={handleSubmit} className="p-4">
        <div>
          <label htmlFor="title" className="block text-[18px] mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
            className="border bg-neutral-100 p-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="block text-[18px] mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100 w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-[18px] mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100 w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="imageURL" className="block text-[18px] mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={productData.imageURL}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100 w-full"
          />
        </div>

        {/* Subcategory Selection */}
        <div className="mt-4">
          <label htmlFor="subCategory" className="block text-[18px] mb-2">
            Subcategory:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            value={productData.subCategory}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100 w-full"
          >
            <option value="">Select a Subcategory</option>
            {subCategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {loading && <p className="text-blue-500 mt-4">Adding product...</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6 bg-red-500 text-white p-2 rounded transition duration-200 hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
