const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 pt-12 md:pt-40">
      <div className="mb-4 flex justify-center">
        <span className="bg-[#FFFFFF0A] text-white text-xs px-4 py-1 rounded-full flex items-center gap-2">
          <span className="font-bold">* scout</span>
          <span className="text-gray-400">
            is currently in beta <span className=" text-white">{">"}</span>
          </span>
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        AI for teams building
        <br />
        what&apos;s next.
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
        Scout gives you the tools to build custom agents and workflows in record
        time.
      </p>
      <button className="mt-2 px-8 py-3 rounded-full bg-white text-gray-900 font-semibold text-lg shadow hover:bg-gray-100 transition">
        Get Started <span className="ml-2">→</span>
      </button>
    </main>
  );
};

export default Hero;
