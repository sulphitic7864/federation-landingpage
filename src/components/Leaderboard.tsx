import { MapPin } from "lucide-react";

const champions = [
  {
    rank: 1,
    name: "Loft Atlas",
    club: "Equipe Atlas Marrakech",
    bague: "MA123456",
    distance: "320 km",
    speed: "1450.23",
    time: "08:14:32",
    concours: "Casablanca Nord",
  },
  {
    rank: 2,
    name: "Team Bahia",
    club: "Loft Bahia Racing",
    bague: "MA654321",
    distance: "280 km",
    speed: "1438.11",
    time: "08:27:15",
    concours: "Mohammedia",
  },
  {
    rank: 3,
    name: "Loft Pirate",
    club: "Pirate Racing Club",
    bague: "MA987654",
    distance: "350 km",
    speed: "1429.87",
    time: "08:05:41",
    concours: "Settat",
  },
  {
    rank: 4,
    name: "Les Aigles",
    club: "Club Les Aigles",
    bague: "MA456789",
    distance: "295 km",
    speed: "1415.56",
    time: "08:19:03",
    concours: "Bouskoura",
  },
  {
    rank: 5,
    name: "Victory Loft",
    club: "Team Victory",
    bague: "MA321987",
    distance: "310 km",
    speed: "1408.92",
    time: "08:22:18",
    concours: "Nouaceur",
  },
];

const waitingSlots = Array.from({ length: 25 }, (_, i) => i + 6);

const Leaderboard = () => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-gold glow-gold-pulse bg-[url('/src/assets/federation-logo.png')] bg-cover bg-center bg-no-repeat "
      style={{ border: "1px solid rgba(212, 175, 55, 0.4)" }}
    >
      {/* Title */}
      <div className="text-center py-4 border-b border-gold/30 gradient-card">
        <div className="flex justify-center gap-2 mb-2">
          <span className="text-gold-light text-xl md:text-5xl">🏆</span>
        </div>
        <h2 className="font-roboto font-black text-xl md:text-2xl tracking-[0.2em] text-gold-light gold-text-glow">
          CHAMPIONS EN DIRECT
        </h2>
        <p className="font-cairo text-gold text-base mt-0">الأبطال المباشرون</p>
        <p className="text-muted-foreground text-xs mt-0">
          — Uniquement les Champions —
        </p>
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center md:w-1/2 w-full bg-blue-950 rounded-lg  md:gap-3 gap-1  text-xs text-muted-foreground">
            <span className=" px-2 py-0.5 rounded text-[11px] ">
              📅 Dimanche 24 Mars 2026
            </span>
            <span className="text-gold/40">|</span>
            <span className="text-[11px]">TOP 1 par concours</span>
            <span className="text-[11px] text-yellow-400">
              🏆 30 PLACES (FIXES)
            </span>
          </div>
        </div>
        <p className="text-muted-foreground !text-base mt-1 italic !text-white">
          Mise à jour automatique toutes les 10 secondes
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#1E3A8A]">
        <table className="w-full text-xs border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#02154b] text-gray-300 text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-2 text-center rounded-l-full border-t border-b border-gray-400">
                Rang
              </th>

              <th className="py-2.5 px-2 text-left border-t border-b border-gray-400">
                Nom du Pigeon
              </th>

              <th className="py-2.5 px-2 text-center border-t border-b border-gray-400">
                Bague
              </th>

              <th className="py-2.5 px-2 text-center border-t border-b border-gray-400">
                Distance
              </th>

              <th className="py-2.5 px-2 text-center border-t border-b border-gray-400">
                Vitesse
              </th>

              <th className="py-2 px-2 text-center border-t border-b border-gray-400">
                Heure
              </th>

              <th className="py-2 px-2 text-center rounded-r-full border-t border-b border-gray-400">
                Concours
              </th>
            </tr>
          </thead>
          <tbody>
            {champions.map((c) => (
              <tr
                key={c.rank}
                className={`${c.rank % 2 === 1 ? "table-row-odd" : "table-row-even"} border-b hover:brightness-125 transition-all`}
                style={{ borderBottomColor: "rgba(212, 175, 55, 0.15)" }}
              >
                <td
                  className="py-2.5 px-2 text-center font-black text-xs relative text-yellow-500 "
                  style={
                    c.rank <= 5
                      ? {
                          background:
                            "linear-gradient(to bottom, #FFD700, #c49924)",
                          color: "#0A1F44",
                          borderRadius: "8px 0 0 8px",
                          clipPath:
                            "polygon(0 0, 100% 0, 100% 17%, 62% 99%, 62% 100%, 0 99%, 0% 70%, 0% 30%)",

                          boxShadow: "0 0 12px rgba(212, 175, 55, 0.6)",
                        }
                      : {}
                  }
                >
                  {c.rank}
                </td>

                <td className="py-2.5 px-2">
                  <div className="font-bold !text-white text-foreground text-xs leading-tight">
                    {c.name}
                  </div>
                  <div className="text-muted-foreground font-bold !text-yellow-400 text-[10px] leading-tight">
                    {c.club}
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center !text-white text-muted-foreground font-mono text-[10px]">
                  {c.bague}
                </td>

                <td className="py-2.5 px-2 text-center">
                  <span className="flex items-center justify-center gap-1 text-xs font-bold text-white">
                    <MapPin
                      size={14}
                      className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
                    />

                    {c.distance}
                  </span>

                  <div className="text-muted-foreground text-[9px] !text-gray-300">
                    Distance
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center">
                  <div className="text-gold-light font-bold text-sm leading-tight gold-text-glow">
                    {c.speed}
                  </div>
                  <div className="text-muted-foreground text-[9px] text-gold-light">
                    m/min
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center text-foreground text-xs !text-white">
                  {c.time}
                </td>
                <td className="py-2.5 px-2 text-center text-yellow-400 font-bold text-sm leading-tight">
                  {c.concours}
                </td>
              </tr>
            ))}
            {waitingSlots.map((num) => (
              <tr
                key={num}
                className={`${num % 2 === 1 ? "table-row-odd" : "table-row-even"}`}
                style={{ borderBottom: "1px solid rgba(212, 175, 55, 0.05)" }}
              >
                <td className="py-2.5 px-2 text-center">
                  <span className="text-gold/50  text-xs text-yellow-400 font-semibold">
                    {num}
                  </span>
                </td>
                <td
                  className="py-2.5 px-2 text-gray-300 capitalize text-xs italic "
                  colSpan={6}
                >
                  En attente
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
