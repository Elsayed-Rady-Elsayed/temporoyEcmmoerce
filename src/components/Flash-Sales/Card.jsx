import React, { useRef, useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Label from "../Label";
import { MdOutlineVisibility } from "react-icons/md";
import { LuHeartCrack } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux-toolkit/slices/wishlistSlice";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";
import { FaHeart, FaStar } from "react-icons/fa";

const Card = ({
  label,
  image,
  title,
  price,
  oldPrice,
  stars,
  reviews,
  isWishList,
  item,
}) => {
  const [starsList, setStrsList] = useState([]);
  const cardRef = useRef();
  const makeStars = () => {
    const s = [];
    for (var i = 0; i < stars; i++) {
      s.push(i);
    }
    setStrsList(s);
  };
  useEffect(() => {
    makeStars();
    console.log(starsList);
  }, []);
  const toggleCartVisibility = useCallback(() => {
    cardRef.current.classList.toggle("hidden");
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="relative min-w-[230px] h-fit px-1 mb-2">
      <div className="absolute end-3 top-5 flex flex-col gap-4 z-50">
        <button
          onClick={() => {
            isWishList ? dispatch(removeFromWishlist(item)) : null;
          }}
        >
          {isWishList ? <LuHeartCrack size={24} /> : <FaHeart size={24} />}
        </button>
        <Link to={`/products/${item.id}`}>
          <MdOutlineVisibility size={24} />
        </Link>
      </div>

      {label && <Label text={label} bg={"[#00FF66]"} />}

      <div
        className="flex flex-col justify-between gap-1 cursor-pointer"
        onClick={toggleCartVisibility}
      >
        <div className="bg-[#F5F5F5] w-full h-[270px] flex items-center justify-center relative">
          <img
            src={image}
            alt={title}
            className="object-contain h-full w-full"
          />
          <div
            className="bg-red-500 text-white w-full p-2 absolute bottom-0 cursor-pointer hidden"
            ref={cardRef}
            onClick={() => {
              isWishList ? dispatch(addToCart(item)) : null;
            }}
          >
            Add to cart
          </div>
        </div>

        <p className="font-bold capitalize">{title}</p>

        <div>
          <span className="text-red-600 font-bold mr-2">{price}EGP</span>
          {oldPrice && (
            <span className="line-through text-gray-500 font-semibold">
              {oldPrice}
            </span>
          )}
        </div>

        <div className="flex gap-1 items-center text-yellow-300">
          {starsList.map((_, index) => (
            <FaStar />
          ))}
          <span className="ml-2 text-gray-500 font-semibold">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
