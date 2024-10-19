import { useState } from "react";

function TopBar() {
  const [language, setLanguage] = useState("English");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    console.log(language);
  };
  return (
    <div className="bg-black px-4  flex w-full justify-end items-center">
      <div className="flex justify-between w-full md:w-4/5 items-center mx-auto">
        <div className="flex justify-center items-center text-white text-sm flex-1">
          <p className="text-white text-xs md:text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="/shop" className="text-white underline ml-2">
              ShopNow
            </a>
          </p>
        </div>

        <div className="flex items-center  text-white text-sm">
          <div className="languages ">
            <select
              value={language}
              onChange={handleLanguage}
              className="bg-black border-none focus:outline-none focus:border-none text-xs md:text-sm "
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
