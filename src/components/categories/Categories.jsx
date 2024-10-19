import { useEffect } from "react";
// import { IoIosPhonePortrait } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux-toolkit/slices/categoriesReducer";

function Categories() {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  console.log({ categories });
  // const [categories,setCatgories] =useState([])
  // useEffect(()=>{
  //     fetch('https://dummyjson.com/products/category-list')
  //     .then(res => res.json())
  //     .then(data => setCatgories(data));
  // },[])
  return (
    <div className="Categories mt-[40px] mb-[05%] border-b-2 pb-10">
      <div className="banner  p-4 mb-10 my-auto">
        <h1 className="text-[#db4444] font-bold text-[20px]">Categories </h1>
      </div>
      <div className="header">
        <h1 className="font-bold text-[25px] md:text-[40px] ml-[10%] ">
          Browse By Category
        </h1>
      </div>
      <div className="categories-cont flex justify-center gap-10 flex-wrap mt-5 mb-10">
        {categories.slice(2, 8).map((category, index) => (
          <div
            key={index}
            className={`hover:bg-[#db4444] hover:text-white category-box border-2 p-10 rounded-md w-[13%] h-[100%] flex flex-col items-center justify-center 
                        ${
                          category.selected
                            ? "bg-red-500 text-white"
                            : "bg-white text-black"
                        } transition duration-300`}
          >
            <div className="icon text-3xl mb-2 ">
              <img src={category.image} alt="" className="w-[100%] " />
            </div>
            <h1 className="md:text-[20px] font-semibold">{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Categories;
