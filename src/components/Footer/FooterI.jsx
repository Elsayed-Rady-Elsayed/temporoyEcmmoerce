import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import { FiMail } from "react-icons/fi";
  import { IoSend } from "react-icons/io5";
  import appel from "@/assets/download-appstore.png";
  import playStore from "@/assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
  import qrCode from "@/assets/Qr Code.png";
  const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="w-[210px]">
            <h3 className="font-semibold text-lg ">Exclusive</h3>
            <p className="mt-2">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex mt-3 mb-6 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-[4px] outline-none bg-transparent absolute w-full border-white border-2"
              />
              <button className="px-4 py-2  absolute right-0 text-white flex items-center justify-center">
                <IoSend className=" text-2xl" />
              </button>
            </div>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Support</h3>
            <p className="mt-2">Benha, Qalubiu, Egypt </p>
            <p className="mt-2 flex items-center">
              <FiMail className="mr-2" /> ex@gmail.com
            </p>
            <p className="mt-2">+20 010 6854 5278</p>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Account</h3>
            <ul className="mt-2 space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Quick Link</h3>
            <ul className="mt-2 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg">Download App</h3>
            <p className="mt-2 text-xs text-neutral-400 ">
              Save $3 with App New User Only
            </p>
            <div className="flex  items-center gap-2 mt-4">
              <img src={qrCode} alt="Qr Code" className="mt-2" />
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={appel} alt="App Store" />
                <img src={playStore} alt="Play Store" />
              </div>
            </div>
  
            <div className="flex mt-4 space-x-4">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-10 pt-4 text-neutral-600 text-center">
          <p>© Copyright Rimel 2024. All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  