// import React from 'react'

function AdsArea() {
  return (
    <div
    style={{
        width: "80%", // 70% width for the parent container
        maxWidth: "80vw", // Prevent exceeding 70% of the viewport width
        margin: "0 auto", // Center the parent div horizontally
        overflow: "hidden", // Prevent any child overflow
        boxSizing: "border-box",
        marginTop: "5rem",
      }} className=" mt-8 mx-auto  overflow-hidden">
    {/* <!-- Gradient Section --> */}
    <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-purple-300 px-8 py-6">
      {/* <!-- Left Content --> */}
      <div>
        <h2 className="text-white font-semibold text-2xl">
          Become a 
          <span className="text-yellow-400 font-bold">Plus</span> member
        </h2>
        <p className="text-gray-200 mt-2 mb-4 text-sm">
          And enjoy extra bachat on every order
        </p>
        {/* <!-- Bottom Border -->/ */}
        <div className="w-1/2 border-b border-yellow-400 mb-4"></div>
        {/* <!-- Description --> */}
        <p className="text-white text-sm">
          Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership 
          <a href="#" className="underline">Know more </a>
        </p>
        {/* <!-- Button --> */}
        <button className="bg-yellow-400 text-gray-800 font-bold text-sm px-5 py-2 rounded-md mt-4 hover:bg-yellow-500">
          Explore Now &#9658;
        </button>
      </div>
  
      
      <div className="w-70 h-70">
        <img
          src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0" 
          alt="Family"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
  )
}

export default AdsArea