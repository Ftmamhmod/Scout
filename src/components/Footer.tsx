const Footer = () => {
  return (
    <footer className=" text-white pt-12  general-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        <div className="flex flex-col gap-4 min-w-[220px]">
          <div className="flex items-center gap-2 text-2xl font-bold mb-2">
            <span className="text-2xl">*</span> scout
          </div>
          <div>
            <span className="bg-[#101c16] text-green-400 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-sm w-full justify-center ">
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
          <a href="#slack" className=" p-2  general-border">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#fff" />
              <circle cx="12" cy="12" r="8" fill="#23242b" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">
                💬
              </text>
            </svg>
          </a>
          <a href="#x" className=" p-2  general-border">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#fff" />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="14"
                fill="#23242b"
              >
                X
              </text>
            </svg>
          </a>
          <a href="#linkedin" className=" p-2 general-border">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#fff" />
              <text
                x="12"
                y="16"
                textAnchor="middle"
                fontSize="10"
                fill="#23242b"
              >
                in
              </text>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
