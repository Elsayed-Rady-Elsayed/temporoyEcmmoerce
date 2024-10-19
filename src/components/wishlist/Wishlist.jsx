import React, { useEffect } from "react";
import Card from "../Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";
import { Link } from "react-router-dom";
import { GetWishList } from "../../redux-toolkit/slices/wishlistSlice.js";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetWishList());
  }, []);
  return (
    <div className="md:py-5 md:w-[90%] m-auto">
      <div className="header flex justify-between ">
        <span>
          Wishlist <span>({wishlist.length})</span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5">
        {wishlist.map((el, idx) => {
          return (
            <Card
              key={idx}
              item={el}
              isWishList={true}
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

export default WishList;
