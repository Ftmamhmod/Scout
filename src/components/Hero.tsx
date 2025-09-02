const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-12 md:pt-40">
      <div className="mb-3 sm:mb-4 flex justify-center">
        <span className="bg-[#FFFFFF0A] text-white text-[11px] sm:text-xs px-3 sm:px-4 py-1 rounded-full flex items-center gap-1 sm:gap-2">
          <span className="font-bold">* scout</span>
          <span className="text-gray-400">
            is currently in beta <span className="text-white">{">"}</span>
          </span>
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
        AI for teams building
        <br />
        what&apos;s next.
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl px-2">
        Scout gives you the tools to build custom agents and workflows in record
        time.
      </p>
      <button className="mt-1 sm:mt-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-gray-900 font-semibold text-base sm:text-lg shadow hover:bg-gray-100 transition">
        Get Started <span className="ml-2">→</span>
      </button>
    </main>
  );
};

export default Hero;
