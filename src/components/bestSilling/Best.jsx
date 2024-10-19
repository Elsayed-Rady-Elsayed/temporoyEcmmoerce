import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux-toolkit/slices/productReducer";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux-toolkit/slices/Cart-slice";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../redux-toolkit/slices/wishlistSlice";
import Card from "../Card";

function Best() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);
  console.log(wishlist);
  //     const [products,setProducts] = useState([])
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  //   useEffect(()=>{
  //     fetch("https://dummyjson.com/products").then(res => res.json()).then(data =>
  //       setProducts(data.products)
  //     )

  // },[])
  console.log(products);
  const handleProducts = () => {
    setEnd(products.length - 21);
  };
  console.log(wishlist);
  return (
    <div className="Best mt-[5%]">
      <div className="banner  p-4 mb-10 my-auto">
        <h1 className="text-[#db4444] font-bold text-[20px]">This Month </h1>
      </div>
      <div className="header flex">
        <h1 className="font-bold text-[25px] md:text-[40px] ml-[10%] ">
          Best Selling Products
        </h1>
        <button
          className="bg-[#db4444] p-4 m-auto block text-white font-bold rounded"
          onClick={handleProducts}
        >
          View All Products
        </button>
      </div>
      <div className="best-products grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 mt-[50px]">
        {products.slice(start, end).map((el, idx) => {
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
}
export default Best;
