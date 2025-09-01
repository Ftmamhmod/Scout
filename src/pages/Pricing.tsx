const Pricing = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center py-16 px-4 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          A plan for every need.
        </h2>
        <p className="text-lg text-gray-300">
          Whether you are just starting or require massive scale, we have a
          solution.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full max-w-5xl mb-10">
        {/* Hobby */}
        <div className="flex-1 bg-gradient-to-br from-[#1B1B1B00] to-[#1B1B1B] border border-gray-700  rounded-2xl p-8 shadow-lg flex flex-col hover:bg-gradient-to-br hover:from-[#C38CF533] hover:to-[#1A1A1A33] hover:scale-105 transition-all duration-100">
          <div className="flex items-center mb-4">
            <span className="bg-green-700 text-xs px-3 py-1 rounded-full font-semibold">
              HOBBY
            </span>
          </div>
          <div className="text-4xl font-bold mb-2">$0</div>
          <div className="text-gray-400 mb-6">
            Great for personal use or a first step to explore the Scout
            platform.
          </div>
          <button className="bg-[#23242b] text-white rounded-lg py-2 font-semibold mb-6">
            Sign Up
          </button>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>100 Interactions (GPT-3.5 Only)</li>
            <li>Deploy 1 App</li>
            <li>Connect 1 Collection</li>
            <li>10GB of Storage</li>
            <li>Community Support (Discord)</li>
          </ul>
        </div>
        {/* Pro */}
        <div className="flex-1 bg-gradient-to-br from-[#1B1B1B00] to-[#1B1B1B]  border border-gray-700  rounded-2xl p-8 shadow-lg flex flex-col relative hover:bg-gradient-to-br hover:from-[#C38CF533] hover:to-[#1A1A1A33] hover:scale-105 transition-all duration-100">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <span className="bg-[#6d4aff] text-xs px-4 py-1 rounded-full font-semibold shadow">
              MOST POPULAR
            </span>
          </div>
          <div className="flex items-center mb-4 mt-6">
            <span className="bg-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
              PRO
            </span>
          </div>
          <div className="text-4xl font-bold mb-2">$50</div>
          <div className="text-gray-400 mb-6">
            Perfect for building and scaling models with limited context.
          </div>
          <button className="bg-white text-[#23242b] rounded-lg py-2 font-semibold mb-6">
            Sign Up
          </button>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Unlimited Interactions</li>
            <li>$0.09 per Interaction</li>
            <li>Deploy 10 Apps</li>
            <li>Connect 10 Collections</li>
            <li>1TB of Storage</li>
            <li>Community & Email Support</li>
          </ul>
        </div>
        {/* Enterprise */}
        <div className="flex-1 bg-gradient-to-br from-[#1B1B1B00] to-[#1B1B1B]  border border-gray-700  rounded-2xl p-8 shadow-lg flex flex-col hover:bg-gradient-to-br hover:from-[#C38CF533] hover:to-[#1A1A1A33] hover:scale-105 transition-all duration-100">
          <div className="flex items-center mb-4">
            <span className="bg-blue-900 text-xs px-3 py-1 rounded-full font-semibold">
              ENTERPRISE
            </span>
          </div>
          <div className="text-4xl font-bold mb-2">Custom</div>
          <div className="text-gray-400 mb-6">
            For large scale models with large and ever-changing context.
          </div>
          <button className="bg-[#23242b] text-white rounded-lg py-2 font-semibold mb-6">
            Request Access
          </button>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Unlimited Interactions</li>
            <li>Custom Interaction Pricing</li>
            <li>Unlimited Apps</li>
            <li>Unlimited Collections</li>
            <li>Unlimited Storage</li>
            <li>Dedicated Support</li>
          </ul>
        </div>
      </div>
      {/* Dedicated Support & Add On */}
      <div className="flex flex-col md:flex-row rounded-2xl w-full max-w-5xl bg-gradient-to-br from-[#1B1B1B00] to-[#1B1B1B]  border border-gray-700  hover:bg-gradient-to-br hover:from-[#C38CF533] hover:to-[#1A1A1A33] hover:scale-105 transition-all duration-100">
        <div className="w-3/4  bg-gradient-to-br from-[#1B1B1B00] to-[#1B1B1B] rounded-s-2xl p-8 shadow-lg border border-gray-700 ">
          <div className="text-xl font-semibold mb-2">Dedicated Support</div>
          <div className="text-gray-400 mb-4">
            We are here to help get you started with a dedicated support
            engineer who can assist with scoping your first models and getting
            them deployed.
          </div>
          <div className="text-sm font-semibold mb-2">WHAT'S INCLUDED</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <div>Shared Slack Channel</div>
            <div>Dedicated Support Engineer</div>
            <div>Prompt Engineering Guidance</div>
            <div>Context Sourcing Guidance</div>
          </div>
        </div>
        <div className=" w-1/4 text-center  bg-gradient-to-br from-[#2d2340] to-[#23242b] rounded-e-2xl p-8 shadow-lg flex flex-col justify-between  ">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-[#C38CF533] text-xs px-3 py-1 rounded-full font-semibold ">
                ADD ON
              </span>
            </div>
            <div className="text-4xl font-bold mb-2">$750</div>
            <div className="text-gray-400 mb-6">monthly</div>
            <button className="bg-white text-[#23242b] rounded-2xl py-2 px-8 font-semibold mb-6">
              Request Access
            </button>
            <div className="text-xs text-gray-400">
              No long term contract obligation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
