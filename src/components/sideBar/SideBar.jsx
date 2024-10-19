import { useEffect } from "react";
import "./sidebar.css";
import { Carousel } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux-toolkit/slices/categoriesReducer";

function SideBar() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  console.log(categories);
  return (
    <div className="all">
      <div className="SideBar font-bold text-[15px] align-middle text-center border-r-4 md:h-[50vh] flex-col justify-center list-none">
        {categories.map((el, idx) => {
          return (
            <li key={idx} className="mt-[10px] side-li">
              {el.name}
            </li>
          );
        })}
      </div>
      <div className="crousel h-56 sm:h-64 xl:h-80 2xl:h-96 md:mt-8 xs:mt-3 ">
        <Carousel>
          <img
            src="https://wallpapers.com/images/hd/e-commerce-1920-x-1200-wallpaper-qonsimqe6fix04kk.jpg"
            alt="..."
          />
          <img
            src="https://wallpapers.com/images/hd/e-commerce-1920-x-1080-wallpaper-osokgb7vlak9hjmi.jpg"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0kilQzOV3UE9ZVflCV_1JOhV27r29MpMhozlEWo4rRk44YuzlmTlgBG24lWr7BPeW1k&usqp=CAU"
            alt="..."
          />
          <img
            src="https://thumbs.dreamstime.com/b/positive-black-girl-shopping-online-using-laptop-credit-card-e-commerce-concept-positive-black-girl-shopping-online-using-194401972.jpg"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLufNeTBiWqdw8QAU8ysgrEXOa2cHCFhKKUQ&s"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
export default SideBar;
