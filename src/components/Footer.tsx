import logo from "../assets/logo.png";
import { FaSlackHash, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white p-6 md:p-12 general-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 px-4 md:px-10">
        <div className="flex flex-col gap-8 md:gap-14 min-w-[200px]">
          <div>
            <img src={logo} alt="Scout Logo" className="max-w-[150px]" />
          </div>
          <div>
            <span className="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block shadow-[0_0_20px_10px_rgba(74,222,128,0.6)]"></span>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-20 text-sm justify-center pb-6 md:pb-10 w-full md:w-auto">
          <div className="w-full md:w-auto">
            <div className="text-xs text-gray-400 mb-2">LINKS</div>
            <ul className="space-y-1">
              {/* Links content remains the same */}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <div className="text-xs text-gray-400 mb-2">SOLUTIONS</div>
            <ul className="space-y-1">
              {/* Solutions content remains the same */}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <div className="text-xs text-gray-400 mb-2">LEGAL</div>
            <ul className="space-y-1">
              {/* Legal content remains the same */}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center general-border p-4 md:p-5 mt-6 gap-4">
        <div className="text-center text-xs text-gray-400">
          Copyright © 2024 Scout. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a href="#slack" className="p-2 general-border" aria-label="Slack">
            <span className="text-xl md:text-2xl text-white">
              <FaSlackHash />
            </span>
          </a>
          <a href="#x" className="p-2 general-border" aria-label="X">
            <span className="text-xl md:text-2xl text-white">
              <FaTwitter />
            </span>
          </a>
          <a
            href="#linkedin"
            className="p-2 general-border"
            aria-label="LinkedIn"
          >
            <span className="text-xl md:text-2xl text-white">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
