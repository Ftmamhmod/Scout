import { FaChartLine, FaCircle, FaSquare } from "react-icons/fa";
import { FaBagShopping, FaElevator, FaMessage } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-16 general-border">
      <div className="grid grid-cols-4 md:grid-cols-7 w-full general-border">
        {/* First column - hide on mobile */}
        <div className="hidden md:flex flex-col items-center justify-center general-border">
          <div className="w-full h-full flex items-center justify-center opacity-40">
            {""}
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border">
            {""}
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border">
            {""}
          </div>
        </div>

        {/* Icons column */}
        <div className="flex flex-col items-center justify-center general-border">
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaChartLine className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaCircle className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaElevator className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
        </div>

        {/* Center content */}
        <div className="col-span-2 md:col-span-3 flex flex-col items-center justify-center text-center px-4 md:px-8 py-6 md:py-8 general-border hover:opacity-100 transition-opacity duration-200">
          <div className="text-sm md:text-2xl lg:text-3xl font-medium text-white mb-4 md:mb-8 leading-snug">
            "Scout is an indispensable tool for our Engineering, DS and Sales
            teams to engage with our customers. We rely on Scout daily, making
            it an integral part of our operations."
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/src/assets/Image.png"
              alt="Vijaye Raji"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white"
            />
            <div className="text-white font-semibold">Vijaye Raji</div>
            <div className="text-xs text-gray-400">CEO of Statsig</div>
          </div>
        </div>

        {/* Right icons column */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaMessage className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaBagShopping className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border hover:opacity-100 transition-opacity duration-200">
            <FaSquare className="w-6 md:w-8 h-6 md:h-8" color="#fff" />
          </div>
        </div>

        {/* Last column - hide on mobile */}
        <div className="hidden md:flex flex-col items-center justify-center general-border">
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border">
            {""}
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border">
            {""}
          </div>
          <div className="w-full h-full flex items-center justify-center opacity-40 general-border">
            {""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
