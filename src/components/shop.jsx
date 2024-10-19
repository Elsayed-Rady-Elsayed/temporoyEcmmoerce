import React, { useEffect } from "react";
import Card from "./Card";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux-toolkit/slices/productReducer";
import { getCategories } from "../redux-toolkit/slices/categoriesReducer";
const Shop = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCategories());
  }, [dispatch]);
  window.scrollTo(0, 0);
  return (
    <div className="text-start md:w-[90%] m-auto p-2 md:p-0 my-[2rem]">
      <p className="md:ps-2 font-bold text-2xl">Shop</p>
      <div className="flex my-5 md:ps-2 justify-between md:flex-row flex-col gap-3">
        <div className="flex items-center gap-3">
          <p>Filter:</p>{" "}
          <select placeholder="Sort By">
            <option value="option1">price low to high</option>
            <option value="option2">price high to low</option>
            <option value="option3">alphapeticaly a to z</option>
            <option value="option3">alphapeticaly z to a</option>
            <option value="option3">reviews</option>
          </select>
        </div>
        <div>
          <select placeholder="Category">
            {categories.map((el) => {
              return <option value="option1">{el.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {products.map((el, idx) => {
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
