import React from "react";

const FeatureList = () => {
  return (
    <div className="flex min-h-screen bg-[#181A20] text-white">
      {/* Sidebar */}
      <aside className="w-[220px] bg-[#23242b] pt-8 flex flex-col items-center">
        <div className="font-bold text-[22px] mb-10">Acme</div>
        <nav className="w-full">
          <div className="text-sm text-gray-400 ml-8 mb-2">Apps</div>
          <ul className="list-none p-0 m-0">
            <li className="bg-[#282A36] rounded-md mx-4 mb-2 p-4 font-medium">
              Statsbot
            </li>
            <li className="mx-4 mb-2 p-4 text-gray-300">Chief</li>
            <li className="mx-4 mb-2 p-4 text-gray-300">Docs</li>
            <li className="mx-4 mb-2 p-4 text-gray-300">Accounting</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-12 py-10 flex flex-col gap-8">
        {/* Header */}
        <div className="text-2xl font-semibold mb-4">Statsbot</div>

        <div className="flex gap-8">
          {/* Inputs & Actions */}
          <section className="flex-2 flex flex-col gap-6">
            {/* Inputs Card */}
            <div className="bg-[#23242b] rounded-xl p-6 mb-4 shadow-md">
              <div className="font-medium text-lg mb-4">Inputs</div>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm text-gray-300">User Name</label>
                  <input
                    type="text"
                    placeholder="user_name"
                    className="w-full p-2 px-3 rounded-md border-none bg-[#181A20] text-white mt-1"
                    disabled
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Profile</label>
                  <textarea
                    placeholder="profile"
                    className="w-full p-2 px-3 rounded-md border-none bg-[#181A20] text-white mt-1 min-h-[60px]"
                    disabled
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-[#282A36] text-white rounded-md px-4 py-2 cursor-not-allowed"
                    disabled
                  >
                    Run
                  </button>
                  <button
                    className="bg-[#282A36] text-white rounded-md px-4 py-2 cursor-not-allowed"
                    disabled
                  >
                    Clear & Run
                  </button>
                </div>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-[#23242b] rounded-xl p-6 shadow-md">
              <div className="font-medium text-lg mb-4">Actions</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <button
                    className="bg-[#282A36] text-white rounded-md px-4 py-2 cursor-not-allowed"
                    disabled
                  >
                    Get Context From Website
                  </button>
                  <span className="bg-[#23242b] text-[#ffd700] rounded px-2 py-0.5 text-xs">
                    Website
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-[#282A36] text-white rounded-md px-4 py-2 cursor-not-allowed"
                    disabled
                  >
                    Save
                  </button>
                  <span className="bg-[#23242b] text-[#ffd700] rounded px-2 py-0.5 text-xs">
                    Cache
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-[#282A36] text-white rounded-md px-4 py-2 cursor-not-allowed"
                    disabled
                  >
                    Generate Response
                  </button>
                  <span className="bg-[#23242b] text-[#00ff99] rounded px-2 py-0.5 text-xs">
                    GPT-4 Turbo
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Right Panel */}
          <section className="flex-1 flex flex-col gap-6">
            {/* Generate Response Card */}
            <div className="bg-[#23242b] rounded-xl p-6 shadow-md">
              <div className="font-medium text-lg mb-4">Generate Response</div>
              <div className="text-sm text-gray-300 mb-2">Slug</div>
              <input
                type="text"
                value="output"
                className="w-full p-2 px-3 rounded-md border-none bg-[#181A20] text-white mb-3"
                disabled
              />
              <div className="text-sm text-gray-300 mb-2">Message</div>
              <input
                type="text"
                placeholder="Add an optional display message"
                className="w-full p-2 px-3 rounded-md border-none bg-[#181A20] text-white mb-3"
                disabled
              />
              <div className="text-sm text-gray-300 mb-2">Conditions</div>
              <input
                type="text"
                value="If {{inputs.input}} is True"
                className="w-full p-2 px-3 rounded-md border-none bg-[#181A20] text-white mb-3"
                disabled
              />
            </div>

            {/* Configuration Card */}
            <div className="bg-[#23242b] rounded-xl p-6 shadow-md">
              <div className="font-medium text-lg mb-4">Configuration</div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span>Model</span>
                  <span className="bg-[#282A36] text-white rounded px-2 py-0.5 text-sm">
                    GPT-4-turbo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Temperature</span>
                  <span className="bg-[#282A36] text-white rounded px-2 py-0.5 text-sm">
                    0.7
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Max Tokens</span>
                  <span className="bg-[#282A36] text-white rounded px-2 py-0.5 text-sm">
                    400
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Response Type</span>
                  <span className="bg-[#282A36] text-white rounded px-2 py-0.5 text-sm">
                    Text
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Prompt</span>
                  <span className="bg-[#282A36] text-white rounded px-2 py-0.5 text-sm">
                    output
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FeatureList;
