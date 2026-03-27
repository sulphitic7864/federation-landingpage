import { useState } from "react";
import federationLogo from "@/assets/federation-logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 py-4 shadow-2xl border-t-4 border-blue-900 fixed top-0 w-full z-50 bg-white">
      <div className="flex md:items-center justify-between items-start">
        <div className="flex  md:gap-4 gap-2 md:flex-row flex-col md:items-center items-start">
          <img
            src={federationLogo}
            alt="Fédération Colombophile Grand Casablanca"
            width={84}
            height={84}
            className="rounded-full shadow-2xl bg-white z-10 border-[#c49924] border md:-mb-12 mb-0"
            style={{
              boxShadow:
                "0 0 15px rgba(10, 31, 68, 0.4),0 0 30px rgba(10, 31, 68, 0.15)",
            }}
          />

          {/* TEXT → HIDE ON SMALL */}
          <div
            className="
          "
          >
            <p
              className="font-cairo md:text-lg text-xs leading-tight font-semibold text-[#0A1F44]"
              dir="rtl"
            >
              فدرالية الدار البيضاء الكبرى لسباق الحمام الزاجل
            </p>
            <h1
              className="font-roboto font-bold md:text-lg text-xs leading-tight tracking-wide"
              style={{ color: "#0A1F44" }}
            >
              FÉDÉRATION DU GRAND CASABLANCA
            </h1>
            <p className="text-xs font-bold text-[#0A1F44] capitalize">
              Course de Pigeons Voyageurs
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div
                className="px-6 py-2 rounded-full flex items-center gap-2"
                style={{
                  background: "#FF3B3B",
                  boxShadow:
                    "0 0 20px rgba(255, 59, 59, 0.5), 0 0 40px rgba(255, 59, 59, 0.2)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="font-bold text-white text-sm tracking-wider">
                  EN DIRECT • LIVE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span>Mise à jour :</span>
                <span className="font-bold p-2 rounded-md bg-[#f9f9f9] border text-[#444]">
                  16:07:24
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 rounded-xl  text-[#444]">
                <span>
                  Auto-refresh :{" "}
                  <strong style={{ color: "#0A1F44" }}>10s</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-2 justify-end text-xs">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
              alt="Google Sheets"
              className="w-4 h-4"
            />
            <span>
              Source :{" "}
              <strong style={{ color: "#0A1F44" }}>Google Sheets</strong>
            </span>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute left-0 w-full bg-white shadow-xl transition-all duration-500 overflow-hidden ${
          menuOpen ? "top-full opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <div className="p-4 space-y-4 mt-16 flex items-center flex-col">
          <div
            className="px-6 py-2 rounded-full flex items-center gap-2 w-fit"
            style={{
              background: "#FF3B3B",
              boxShadow:
                "0 0 20px rgba(255, 59, 59, 0.5), 0 0 40px rgba(255, 59, 59, 0.2)",
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="font-bold text-white text-sm">
              EN DIRECT • LIVE
            </span>
          </div>

          <div className="text-sm">
            <p>
              Mise à jour :
              <span className="ml-2 font-bold p-2 rounded-md bg-[#f9f9f9] border">
                16:07:24
              </span>
            </p>

            <p className="mt-2">
              Auto-refresh :<strong className=" text-[#0A1F44]">10s</strong>
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
              alt="Google Sheets"
              className="w-4 h-4"
            />
            <span>
              Source :{" "}
              <strong style={{ color: "#0A1F44" }}>Google Sheets</strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
