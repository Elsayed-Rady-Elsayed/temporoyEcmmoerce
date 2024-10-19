import "./NewArrival.css"
function NewArrival(){
    return (
        <>
        <div className="banner  p-4 mb-10 my-auto mt-[100px]">
                <h1 className="text-[#db4444] font-bold text-[20px]">Featured </h1>
            </div>
        <div className="intro">
            <h1 className="text-[40px] font-bold ml-[10%]">New Arrival</h1>
        </div>
        
        <div className="container mx-auto mt-10 w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {/* Card 1 */}
            <div className="">
            <div className="relative bg-white overflow-hidden shadow-lg h-[100%]">
              {/* Background Image */}
              <img
                src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x2400/filters:focal(1017x596:1018x597):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22015298/vpavic_4278_20201030_0120.jpg"
                alt="PlayStation 5"
                className="w-full h-full object-cover "
              />
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center  text-center items-start p-4 text-white">
                <h3 className="text-xl font-bold">PlayStation 5</h3>
                <p className="text-gray-100">Black and White version of the PS5 coming out on sale.</p>
                <button className="mt-4 text-black bg-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
            </div>
    
            {/* Repeat for other cards */}
            {/* Card 2 */}
            <div className="grid">
            <div className="relative bg-white  overflow-hidden shadow-lg ">
              <img
                src="data:image/jpeg;base64,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"
                alt="Women's Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center text-center items-start p-4 text-white">
                <h3 className="text-xl font-bold">Women s Collections</h3>
                <p className="text-gray-100">Featured woman collections that give you another vibe.</p>
                <button className="mt-4 text-black bg-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
            
            
    
            {/* Card 3 */}
            <div className="grid grid-cols-2 gap-5 mt-[5%]">
            <div className="relative bg-white  overflow-hidden shadow-lg ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4XcRRBRe7vPYQr8EbHXADRRCH5KL52X1ow&s"
                alt="Speakers"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-4 text-white">
                <h3 className="text-xl font-bold">Speakers</h3>
                <p className="text-gray-100">Amazon wireless speakers</p>
                <button className="mt-4 text-black bg-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
    
            {/* Card 4 */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="data:image/jpeg;base64,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"
                alt="Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-4 text-white">
                <h3 className="text-xl font-bold">Perfume</h3>
                <p className="text-gray-100">GUCCI INTENSE OUD EDP</p>
                <button className="mt-4 text-black bg-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>

        </>
      );
}
export default NewArrival;