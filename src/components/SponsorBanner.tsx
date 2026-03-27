const SponsorBanner = () => {
  return (
    <div
      className="py-3 px-4 sponser-board md:!w-[71%] w-full"
      style={{
        background: "linear-gradient(135deg, #f5c542, #FFD700, #f5c542)",
        boxShadow: "0 4px 20px rgba(245, 197, 66, 0.3)",
      }}
    >
      <div className="max-w-5xl mx-auto md:flex-row flex-col flex items-center justify-between p-5 md:gap-0 gap-5">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>

          <span className="relative text-yellow-400 text-6xl">👑</span>
        </div>

        <div className="text-center">
          <p className="text-yellow-200 font-bold text-sm tracking-wide">
            ESPACE SPONSOR PREMIUM
          </p>
          <p className="text-gray-300 text-xs">
            Bannière Header 728 × 90 • Votre publicité ici
          </p>
        </div>

        <button
          className="px-4 py-1.5 rounded-full text-xs font-bold border border-white bg-gradient-to-r from-yellow-100 to-amber-400 "
          style={{
            boxShadow: "0 2px 10px rgba(255, 215, 0, 0.5)",
          }}
        >
          Devenir Sponsor
        </button>
      </div>
    </div>
  );
};

export default SponsorBanner;
