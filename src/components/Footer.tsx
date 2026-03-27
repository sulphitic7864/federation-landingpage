import federationLogo from "@/assets/federation-logo.png";
import qrCode from "@/assets/qr-code.png";
import footer_logo from "@/assets/footer_logo.png";
import { Mail } from "lucide-react";
import { Eye, Users, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #f5c542, #FFD700, #f5c542, transparent)",
          boxShadow:
            "0 0 20px rgba(245, 197, 66, 0.6), 0 0 40px rgba(245, 197, 66, 0.3)",
        }}
      />

      <div
        className="py-8"
        style={{
          background: "linear-gradient(180deg, #0A1F44 0%, #0D2A5C 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Center branding */}
          <div className="flex items-center justify-center flex-wrap gap-6 mb-6 border-b pb-5">
            <img src={footer_logo} alt="Logo" loading="lazy" />

            <div className="h-20 border-l border-gray-200"></div>
            <img
              src={federationLogo}
              alt="Logo"
              width={80}
              height={80}
              loading="lazy"
              className="rounded-full"
              style={{
                border: "3px solid #f5c542",
                boxShadow: "0 0 20px rgba(245, 197, 66, 0.4)",
              }}
            />

            {/* Federation info */}
            <div className="text-left">
              <p className="text-sm font-light mb-0.5 text-gray-200">
                Fièrement mis en place pour
              </p>
              <p className="font-cairo text-sm font-bold text-white " dir="rtl">
                فدرالية الدار البيضاء الكبرى لسباق الحمام الزاجل
              </p>
              <p className="font-bold text-sm tracking-wide text-white mt-1">
                FÉDÉRATION DU GRAND CASABLANCA
              </p>
              <p className="text-xs text-white">Course de Pigeons Voyageurs</p>
            </div>
          </div>

          {/* Contact email - gold pill */}
          <div className="text-center mb-6 flex items-center justify-center gap-5">
            <div className=" text-sm text-white font-medium flex items-center justify-between gap-4">
              <p className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  Contact pour publicité :
                </span>
              </p>
              <button
                className="px-4 py-1.5 rounded-full text-xs font-bold border border-white bg-gradient-to-r from-yellow-100 to-amber-400"
                style={{
                  background: "linear-gradient(135deg, #f5c542, #FFD700)",
                  color: "#0A1F44",
                  boxShadow: "rgba(255, 215, 0, 0.5) 0px 2px 10px;",
                }}
              >
                louay.el-malki@omni-lynk.com
              </button>
              <p className="text-white">
                Pour tout achat d'espace publicitaire
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-around flex-wrap gap-6  border-y-4 border-yellow-200 w-full">
          <div className="w-[80%] flex items-center justify-between">
            <div className="flex items-start gap-2">
              <Eye className="h-10 w-10 text-cyan-400" />
              <div className="">
                <p className="text-white font-semibold text-xl">1 247</p>
                <p className="text-xs text-gray-300 ">Visiteurs aujourd'hui</p>
              </div>
            </div>



             <div className="flex items-start gap-2">
              <Users className="h-10 w-10 text-cyan-400" />
              <div className="">
                <p className="text-white font-semibold text-xl">12 893</p>
                <p className="text-xs text-gray-300 ">Visiteurs totaux</p>
              </div>
            </div>


            <div className="flex items-start gap-2">
              <Clock className="h-10 w-10 text-cyan-400" />
              <div className="">
                <p className="text-white font-semibold text-xl"> Dernière actualisation</p>
                <p className="text-xs text-gray-300 ">  24/03/2026 à 16:07:24</p>
              </div>
            </div>




            <div
              className="bg-white rounded-lg  -my-4 p-2 flex flex-col items-center gap-1"
              style={{ boxShadow: "0 0 15px rgba(245, 197, 66, 0.2)" }}
            >
              <img
                src={qrCode}
                alt="QR Code"
                width={96}
                height={96}
                loading="lazy"
                className="rounded"
              />
              <p
                className="text-[8px] text-center leading-tight max-w-[80px]"
                style={{ color: "#666" }}
              >
                Scanner pour visiter le site de la Fédération
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-3 px-4 border-t-8 border-gray-300 bg-gradient-to-tr from-[#916302] to-[#F2C35A]"
        style={{
         
          boxShadow: "0 -2px 15px rgba(245, 197, 66, 0.3)",
        }}
      >
        <div
          className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-xs"
          style={{ color: "#0A1F44" }}
        >
          <span className="font-playfair italic font-bold text-sm">
            Nos Sponsors Officiels
          </span>
          <span>•</span>
          <span>Réservez votre espace publicitaire</span>
          <span>•</span>
          <span className="font-bold">federation-casablanca.ma/sponsors</span>
          <span>•</span>
          <span>+212 5 22 XX XX XX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
