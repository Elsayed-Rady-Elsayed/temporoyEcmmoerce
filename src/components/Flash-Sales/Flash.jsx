import "./flash.css";
import { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux-toolkit/slices/productReducer";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";
import { Link } from "react-router-dom";
function Flash() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const [products,setProducts] = useState([])

  // useEffect(()=>{
  //   fetch("https://dummyjson.com/products").then(res => res.json()).then(data =>
  //     setProducts(data.products)
  //   )

  //   console.log(products)
  // },[])
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const calculateTimeLeft = () => {
    const discountEndDate = new Date("2024-12-31T23:59:59"); // Set your discount end date
    const now = new Date();
    const difference = discountEndDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [numOfStars, setNumOfStars] = useState([]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const DecreaseCounter = () => {
    if (start >= 0) {
      setStart(start - 1);
      setEnd(end - 1);
      console.log(start);
      console.log(end);
    }
  };

  const IncreaseCounter = () => {
    if (start >= 0) {
      setStart(start + 3);
      setEnd(end + 3);
      console.log(start);
      console.log(end);
    }
  };

  const showAll = () => {
    setStart(0);
    setEnd(products.length);
  };
  return (
    <div className="flash mt-[100px] pb-8 border-b-4">
      <div className="banner  p-4 mb-10 my-auto">
        <h1 className="text-[#db4444] font-bold text-[20px]">Todays </h1>
      </div>
      <div className="sales flex align-middle justify-around">
        <h1 className="text-[20px] font-bold">Flash Sales</h1>
        <div className="flex space-x-4 items-center justify-center text-center text-gray-800">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.days || "00"}</span>
            <span className="text-sm">Days</span>
          </div>
          <span className="text-3xl">:</span>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.hours || "00"}</span>
            <span className="text-sm">Hours</span>
          </div>
          <span className="text-3xl">:</span>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">
              {timeLeft.minutes || "00"}
            </span>
            <span className="text-sm">Minutes</span>
          </div>
          <span className="text-3xl">:</span>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">
              {timeLeft.seconds || "00"}
            </span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <div className="arrows flex gap-3 my-auto">
          <FaArrowCircleLeft size={30} onClick={DecreaseCounter} />
          <FaArrowCircleRight size={30} onClick={IncreaseCounter} />
        </div>
      </div>
      <div className="products grid md:grid-cols-3 mt-4 justify-center gap-4">
        {products.slice(start, end).map((el, idx) => {
          return (
            <Card
              key={idx}
              item={el}
              isWishList={false}
              image={el.image}
              title={el.title}
              price={el.price}
              oldPrice={Math.round(el.price - el.price * 0.2)}
              stars={el.rating.rate}
              reviews={el.rating.count}
            />
          );
        })}
      </div>
      <button
        className="bg-[#db4444] mt-[05%] p-4 m-auto block text-white font-bold rounded mb-5"
        onClick={showAll}
      >
        View All Products
      </button>
    </div>
  );
}
export default Flash;
