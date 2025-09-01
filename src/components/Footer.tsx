import logo from "../assets/logo.png";
import { FaSlackHash, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-white p-12  general-border">
      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 ps-10 pe-10">
        <div className="flex flex-col gap-14 min-w-[220px]">
          <div>
            <img src={logo} alt="Scout Logo" />
          </div>
          <div>
            <span className=" px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block shadow-[0_0_20px_10px_rgba(74,222,128,0.6)]"></span>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-sm justify-center pb-10">
          <div>
            <div className="text-xs text-gray-400 mb-2">LINKS</div>
            <ul className="space-y-1">
              <li>
                <a href="#features" className="hover:underline font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:underline font-medium">
                  Docs
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline font-medium">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-2">SOLUTIONS</div>
            <ul className="space-y-1">
              <li>
                <a href="#slackbot" className="hover:underline font-medium">
                  Slack Bot
                </a>
              </li>
              <li>
                <a href="#discordbot" className="hover:underline font-medium">
                  Discord Bot
                </a>
              </li>
              <li>
                <a href="#command" className="hover:underline font-medium">
                  Command
                </a>
              </li>
              <li>
                <a href="#onsitechat" className="hover:underline font-medium">
                  Onsite Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-2">LEGAL</div>
            <ul className="space-y-1">
              <li>
                <a href="#terms" className="hover:underline font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline font-medium">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center general-border ps-5 pe-5 absolute  left-0 right-0">
        <div className=" text-center text-xs text-gray-400 ">
          Copyright © 2024 Scout. All rights reserved.
        </div>
        <div className="flex gap-4 items-center mt-6 md:mt-0">
          <a href="#slack" className="p-2 general-border" aria-label="Slack">
            <span className="text-2xl text-white">
              <FaSlackHash />
            </span>
          </a>
          <a href="#x" className="p-2 general-border" aria-label="X">
            <span className="text-2xl text-white">
              <FaTwitter />
            </span>
          </a>
          <a
            href="#linkedin"
            className="p-2 general-border"
            aria-label="LinkedIn"
          >
            <span className="text-2xl text-white">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
