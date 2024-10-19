import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux-toolkit/slices/productReducer";
import { getCategories } from "../redux-toolkit/slices/categoriesReducer";
import { useParams } from "react-router-dom";

const Shop = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  let params = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, selectedCategory, sortOption]);

  const filterAndSortProducts = () => {
    let updatedProducts = [...products];
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (params.category != "") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === params.category
      );
    }
    if (sortOption === "priceLowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "aToZ") {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "zToA") {
      updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "reviews") {
      updatedProducts.sort((a, b) => b.rating.count - a.rating.count);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="text-start md:w-[90%] m-auto p-2 md:p-0 my-[2rem]">
      <p className="md:ps-2 font-bold text-2xl">Shop</p>
      <div className="flex my-5 md:ps-2 justify-between md:flex-row flex-col gap-3">
        <div className="flex items-center gap-3">
          <p>Filter:</p>
          <select
            onChange={(e) => setSortOption(e.target.value)}
            placeholder="Sort By"
          >
            <option value="">Select Sort Option</option>
            <option value="priceLowToHigh">Price low to high</option>
            <option value="priceHighToLow">Price high to low</option>
            <option value="aToZ">Alphabetically A to Z</option>
            <option value="zToA">Alphabetically Z to A</option>
            <option value="reviews">Reviews</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              params.category = "";
            }}
            placeholder="Category"
          >
            <option value="">All Categories</option>
            {categories.map((el) => {
              return (
                <option key={el.id} value={el.name}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {filteredProducts.map((el, idx) => {
          return (
            <Card
              key={idx}
              item={el}
              isWishList={false}
              image={el.image}
              title={el.title}
              price={el.price}
              oldPrice={el.price - el.price * 0.2}
              stars={el.rating.rate}
              reviews={el.rating.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
