const competitions = [
  {
    status: "Terminé",
    statusColor: "bg-success-green",
    name: "Casablanca Nord",
    date: "Samedi 23 Mars 2026",
    distance: "320 km",
    pigeons: "156 pigeons",
    pigeonLabel: "Participants",
    winner: "Loft Atlas",
    winnerCode: "MA123456 • 1450.23 m/min",
    action: "Voir résultats ›",
  },
  {
    status: "Terminé",
    statusColor: "bg-success-green",
    name: "Mohammedia",
    date: "Samedi 23 Mars 2026",
    distance: "280 km",
    pigeons: "134 pigeons",
    pigeonLabel: "Participants",
    winner: "Team Bahia",
    winnerCode: "MA654321 • 1438.11 m/min",
    action: "Voir résultats ›",
  },
  {
    status: "Terminé",
    statusColor: "bg-success-green",
    name: "Settat",
    date: "Vendredi 22 Mars 2026",
    distance: "350 km",
    pigeons: "167 pigeons",
    pigeonLabel: "Participants",
    winner: "Loft Pirate",
    winnerCode: "MA987654 • 1429.87 m/min",
    action: "Voir résultats ›",
  },
  {
    status: "À venir",
    statusColor: "bg-info-blue",
    name: "Bouskoura-Nouaceur",
    date: "Dimanche 30 Mars 2026",
    distance: "300 km",
    pigeons: "—",
    pigeonLabel: "Attendus",
    winner: null,
    winnerCode: null,
    action: "Course à venir",
  },
];

const CompetitionHistory = () => {
  return (
    <>
      <hr className="mt-5 w-full border-gray-400" />
      <h3 className="text-center font-roboto mt-4  font-semibold text-xl text-foreground !text-blue-950">
        Historique des Compétitions
      </h3>
      <p className="text-base text-blue-950 capitalize font-medium text-center mb-5">
        Consultez les résultats des concours précédents
      </p>

      <div className="space-y-2 !bg-[#f0f0f0]">
        {competitions.map((comp, i) => (
          <div
            key={i}
            className="bg-white hover:bg-gray-200 rounded-lg p-4 flex items-center justify-between flex-wrap gap-3 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 min-w-[200px]">
              <span
                className={`${comp.statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
              >
                {comp.status}
              </span>
              <div>
                <div className=" font-semibold text-base text-blue-950">
                  {comp.name}
                </div>
                <div className="font-normal text-sm text-blue-950">
                  {comp.date}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-base text-blue-950">
                {comp.distance}
              </div>
              <div className="font-normal text-sm text-blue-950">Distance</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-base text-blue-950">
                {comp.pigeons}
              </div>
              <div className="font-normal text-sm text-blue-950">
                {comp.pigeonLabel}
              </div>
            </div>
            {comp.winner ? (
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <div className="">
                    <span className="text-gold-light text-xs">🏆</span>
                  </div>
                  <div className="">
                    <span className="font-semibold text-base text-blue-950">
                      {comp.winner}
                    </span>
                  </div>
                </div>
                <div className="font-normal text-sm text-blue-950">
                  {comp.winnerCode}
                </div>
              </div>
            ) : (
              <div className="min-w-[120px]" />
            )}

            <button
              className={`text-xs px-3 py-1.5 rounded font-semibold transition-all bg-gray-200 hover:bg-gray-300 ${
                comp.status === "À venir"
                  ? "border border-gold/20  "
                  : " hover:brightness-110"
              }`}
            >
              {comp.action}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="  border border-gold/25 px-5 py-2 rounded-lg hover:border-gold/50 hover:text-gold transition-all   font-semibold text-base text-blue-950">
          ☰ Voir tout l'historique des compétitions ›
        </button>
      </div>
    </>
  );
};

export default CompetitionHistory;
