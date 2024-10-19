import { FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";

function Achievements() {
  return (
    <div className="Achievements grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto justify-around mt-16 mb-16 gap-8">
      {/* Seller Active */}
      <div className="item flex flex-col items-center text-center border-2 p-8 hover:text-white hover:bg-[#db4444] transition-colors duration-300">
        <FaHome
          size={80}
          className="bg-gray-300 rounded-full p-5 border-4 mb-6 border-black"
        />
        <h1 className="text-2xl font-bold">10.5k</h1>
        <p className="text-gray-500">Sellers active on our site</p>
      </div>

      {/* Monthly Product Sale */}
      <div className="item flex flex-col items-center text-center border-2 p-8 hover:text-white hover:bg-[#db4444] transition-colors duration-300">
        <FaDollarSign
          size={80}
          className="bg-gray-300 rounded-full p-5 border-4 mb-6 border-black"
        />
        <h1 className="text-2xl font-bold">33k</h1>
        <p className="text-gray-500">Monthly Product Sales</p>
      </div>

      {/* Customer Active */}
      <div className="item flex flex-col items-center text-center border-2 p-8 hover:text-white hover:bg-[#db4444] transition-colors duration-300">
        <BsFillGiftFill
          size={80}
          className="bg-gray-300 rounded-full p-5 border-4 mb-6 border-black"
        />
        <h1 className="text-2xl font-bold">45.5k</h1>
        <p className="text-gray-500">Active customers on our site</p>
      </div>

      {/* Annual Gross Sale */}
      <div className="item flex flex-col items-center text-center border-2 p-8 hover:text-white hover:bg-[#db4444] transition-colors duration-300">
        <FaCoins
          size={80}
          className="bg-gray-300 rounded-full p-5 border-4 mb-6 border-black"
        />
        <h1 className="text-2xl font-bold">25k</h1>
        <p className="text-gray-500">Annual gross sales on our site</p>
      </div>
    </div>
  );
}

export default Achievements;
