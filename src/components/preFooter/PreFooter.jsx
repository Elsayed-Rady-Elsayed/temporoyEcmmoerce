import { CiDeliveryTruck } from "react-icons/ci";
import { MdHeadphones } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

function PreFooter() {
  return (
    <div className="Pre flex flex-col md:flex-row justify-center mt-12 mb-12 gap-8 md:gap-[5%] px-6">
      {/* Item 1 */}
      <div className="item flex flex-col items-center text-center">
        <CiDeliveryTruck
          size={100}
          className="bg-gray-300 rounded-full p-5 border-[10px] md:border-[15px] m-auto border-black"
        />
        <h1 className="mt-3 text-[20px] md:text-[25px] font-bold">
          FREE AND FAST DELIVERY
        </h1>
        <p className="text-[14px] md:text-[16px]">Free delivery for all orders over $140</p>
      </div>

      {/* Item 2 */}
      <div className="item flex flex-col items-center text-center">
        <MdHeadphones
          size={100}
          className="bg-gray-300 rounded-full p-5 border-[10px] md:border-[15px] m-auto border-black"
        />
        <h1 className="mt-3 text-[20px] md:text-[25px] font-bold">
          FRIENDLY CUSTOMER SUPPORT
        </h1>
        <p className="text-[14px] md:text-[16px]">Friendly 24/7 customer support</p>
      </div>

      {/* Item 3 */}
      <div className="item flex flex-col items-center text-center">
        <MdOutlineSecurity
          size={100}
          className="bg-gray-300 rounded-full p-5 border-[10px] md:border-[15px] m-auto border-black"
        />
        <h1 className="mt-3 text-[20px] md:text-[25px] font-bold">
          MONEY BACK GUARANTEE
        </h1>
        <p className="text-[14px] md:text-[16px]">We return money within 30 days</p>
      </div>
    </div>
  );
}

export default PreFooter;
