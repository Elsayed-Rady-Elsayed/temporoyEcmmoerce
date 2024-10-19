import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";
import { fetchProducts } from "../../redux-toolkit/productReducer";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchProducts = useSelector((state) => state.products); // Access products directly from Redux state
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // Fetch products once on mount
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value); // Update search term first
  };

  // Filter products based on the search input
  const filteredProducts =
    search.length > 2
      ? searchProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <div>
      <div className="search-bar flex relative justify-center w-[100%]">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="What are you looking for?"
          className="bg-[#f5f5f5] border-none px-[20px] rounded w-[200%]"
        />
        <FaSearch className="m-auto absolute right-[5%] top-[30%]" />
      </div>

      {/* Display the filtered products */}
      <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white shadow-lg rounded-lg float-left w-[100%] object-cover"
              >
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "default-image-url"
                  }
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
                <p className="text-gray-500">Price: ${product.price}</p>
                <button
                  className="p-2 text-white mt-[5px] rounded-lg bg-[#db4444]"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          : search.length > 2 && (
              <p className="text-center text-gray-500">No products found.</p>
            )}
      </div>
    </div>
  );
}

export default Search;
