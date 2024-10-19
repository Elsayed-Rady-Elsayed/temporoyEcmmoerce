import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.length > 2) {
        setLoading(true);
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data.products || []);
            setLoading(false);
          })
          .catch((err) => {
            setError("Failed to fetch products.");
            setLoading(false);
          });
      } else {
        setProducts([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  useEffect(() => {
    if (search.length > 2) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [search, products]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setError(null);
  };

  return (
    <>
      <div className="flex items-center border-b py-4 px-4 md:px-8 bg-white">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-2xl font-bold">Exclusive</div>

          {/* Navigation links */}
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } min-[810px]:flex flex-col min-[810px]:flex-row min-[810px]:items-center ml-6 min-[810px]:space-x-6 w-full min-[810px]:w-auto mt-4 min-[810px]:mt-0`}
          >
            <nav className="text-lg flex flex-col min-[810px]:flex-row min-[810px]:items-center">
              <Link
                to="/"
                className="hover:text-gray-500 md:text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-500 text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-500 text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                About
              </Link>
              <Link
                to="/signup"
                className="hover:text-gray-500 text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                Sign Up
              </Link>
              <Link
                to="/Shop"
                className="hover:text-gray-500 text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                Shop
              </Link>
              <Link
                to="/add"
                className="hover:text-gray-500 text-[16px] ml-0 min-[810px]:ml-6 mt-2 min-[810px]:mt-0"
              >
                Add product
              </Link>
            </nav>

            {/* Search input */}
            <div className="flex items-center space-x-4 relative mt-4 min-[810px]:mt-0 w-full min-[810px]:w-auto">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-4 py-3 rounded-sm bg-neutral-100 focus:outline-none w-full min-[860px]:w-60 text-black text-xs"
                onChange={handleSearch}
                value={search}
              />
              <button className="text-black px-4 absolute text-lg right-0">
                <FaSearch />
              </button>
            </div>

            {/* Icons */}
            <div className="icons flex justify-between gap-2 align-middle mt-4 min-[810px]:mt-0">
              <Link to="/wishlist" className="m-auto">
                <FaRegHeart size={24} />
              </Link>
              <Link to="/cart" className="m-auto">
                <MdOutlineShoppingCart size={24} />
              </Link>
              <Link to="/profile" className="m-auto">
                <CgProfile size={24} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[810px]:hidden">
            <button onClick={toggleNav} className="text-2xl">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div className="bg-white px-4 py-2 mb-8 flex justify-center items-center">
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-[20px] mt-[20px] w-full md:w-4/5 mx-auto">
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 bg-white shadow-lg rounded-lg"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-36 md:h-48 object-cover rounded-lg"
                    />
                    <h2 className="mt-2 font-bold text-md md:text-lg">
                      {product.title}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                      Price: ${product.price}
                    </p>
                    <button
                      className="p-2 text-white mt-[5px] rounded-lg bg-[#db4444]"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))
              : search.length > 2 &&
                !loading && (
                  <p className="text-center text-gray-500">
                    No products found.
                  </p>
                )}
          </div>
        </div>
      )}
    </>
  );
}
