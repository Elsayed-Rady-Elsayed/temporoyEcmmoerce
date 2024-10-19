import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Developers() {
  return (
    <div className="developers mb-[10%]">
      <h1 className="text-center font-extrabold mb-[30px] text-[40px] text-[#db4444]">
        Our Developers
      </h1>

      <div className="devs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Developer 1 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Abdelmoneim Ramadan" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Abdelmoneim Ramadan</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Elsayed Rady" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Elsayed Rady</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 3 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Ahmed Hossam" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Ahmed Hossam</h1>
            <p className="text-[20px]">Back-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 4 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Hazem Mohamed" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Hazem Mohamed</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 5 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Mohamed Magdy" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Mohamed Magdy</h1>
            <p className="text-[20px]">Back-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
