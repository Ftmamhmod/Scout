const Docs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-10">
        {/* Top Row */}
        <div className="bg-[#181A20] rounded-2xl p-8 shadow-lg flex flex-col justify-end border border-[#23242b] min-h-[260px]">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#23242b] p-3 rounded-full">
              <span className="text-2xl">*</span>
            </span>
            <span className="bg-[#23242b] p-3 rounded-full">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="text-gray-400"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
          </div>
          <div className="font-semibold text-lg mb-1">AI where you work</div>
          <div className="text-gray-400 text-sm">
            Deploy Scout Apps to Slack or Discord
          </div>
        </div>
        <div className="bg-[#181A20] rounded-2xl p-8 shadow-lg border border-[#23242b] min-h-[260px] flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <input
                className="bg-[#23242b] rounded px-2 py-1 text-sm text-white w-1/2"
                placeholder="Name"
                disabled
              />
              <input
                className="bg-[#23242b] rounded px-2 py-1 text-sm text-white w-1/2"
                placeholder="Value"
                disabled
              />
            </div>
            <div className="flex gap-2 mb-2">
              <button
                className="bg-[#23242b] text-xs px-2 py-1 rounded text-gray-300"
                disabled
              >
                Text
              </button>
              <button
                className="bg-[#23242b] text-xs px-2 py-1 rounded text-gray-300"
                disabled
              >
                LLM
              </button>
              <button
                className="bg-[#23242b] text-xs px-2 py-1 rounded text-gray-300"
                disabled
              >
                Web
              </button>
              <button
                className="bg-[#23242b] text-xs px-2 py-1 rounded text-gray-300"
                disabled
              >
                HTTP
              </button>
              <button
                className="bg-[#23242b] text-xs px-2 py-1 rounded text-gray-300"
                disabled
              >
                Save
              </button>
            </div>
          </div>
          <div className="font-semibold text-lg mb-1">Customize your AI</div>
          <div className="text-gray-400 text-sm">
            Build custom workflows and apps in minutes
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#2d2340] to-[#23242b] rounded-2xl p-8 shadow-lg border border-[#23242b] min-h-[260px] flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#23242b] p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-purple-400"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span className="text-xs bg-[#23242b] px-2 py-1 rounded text-purple-300">
                ELI5 Account
              </span>
            </div>
            <div className="text-xs text-gray-300 mb-2">
              This is a sample data output which we can replace.
            </div>
            <div className="flex gap-2">
              <button className="bg-[#6d4aff] text-xs px-3 py-1 rounded text-white">
                Delete
              </button>
              <button className="bg-[#23242b] text-xs px-3 py-1 rounded text-white">
                Save
              </button>
            </div>
          </div>
          <div className="font-semibold text-lg mb-1">
            Access to the right data
          </div>
          <div className="text-gray-400 text-sm">
            Control what your AI knows and what it forgets
          </div>
        </div>
        {/* Bottom Row */}
        <div className="bg-[#181A20] rounded-2xl p-8 shadow-lg border border-[#23242b] min-h-[220px] flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#23242b] p-3 rounded-full">
              <span className="text-2xl">*</span>
            </span>
            <span className="bg-[#23242b] px-3 py-1 rounded text-xs">AI</span>
          </div>
          <div className="font-semibold text-lg mb-1">
            Accelerate your product
          </div>
          <div className="text-gray-400 text-sm">
            Use Scout API to enable AI-features for your customers
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#181A20] to-[#23242b] rounded-2xl p-8 shadow-lg border border-[#23242b] min-h-[220px] flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-gray-300">
                Feature request on Slack
              </span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-blue-300">
                Scout AI
              </span>
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-blue-300">
                Linear ticket for that feature
              </span>
            </div>
          </div>
          <div className="font-semibold text-lg mb-1">Automate your work</div>
          <div className="text-gray-400 text-sm">
            Connect your existing tools and eliminate the busy work
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#2d2340] to-[#23242b] rounded-2xl p-8 shadow-lg border border-[#23242b] min-h-[220px] flex flex-col justify-end">
          <div className="mb-4">
            <div className="flex flex-col gap-2 mb-2">
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-gray-300">
                Thanks Scout. You just saved me a bunch of time
              </span>
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-gray-300">
                Use the Inspect option to review previous runs
              </span>
              <span className="bg-[#23242b] px-2 py-1 rounded text-xs text-gray-300">
                How do I replay a previous app run?
              </span>
            </div>
          </div>
          <div className="font-semibold text-lg mb-1">
            An Inbox with superpowers
          </div>
          <div className="text-gray-400 text-sm">
            Curate responses and reviews results for each interaction
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
