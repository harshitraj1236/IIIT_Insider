import React from "react";
import { useLocation, Link } from "react-router-dom";

const College = () => {
  const location = useLocation();
  const colleges = location.state?.filteredCollege || [];
  if (colleges.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-3xl font-bold font-noto text-amber-500 mb-4">No Colleges Found</h2>
        <p className="text-gray-400 mb-6">Please select a region from the Quick Links to view colleges.</p>
        <Link 
          to="/" 
          className="px-6 py-2 bg-[#4b2c2c] text-amber-500 font-bold rounded-xl hover:bg-amber-600 hover:text-white transition-all"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black w-full p-8 pt-24">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white uppercase tracking-wider mb-2 font-noto">
          Explore Colleges
        </h1>
        <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-300 mx-auto">
        {colleges.map((college, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-[#0f0f13] border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-600 transition-colors duration-300"
          >
            <div className="w-full h-48 overflow-hidden bg-gray-800 relative">
              <img 
                src={college.image} 
                alt={college.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-black/80 text-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase border border-amber-600/30">
                {college.region}
              </div>
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white mb-3 font-noto">
                {college.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 grow">
                {college.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;