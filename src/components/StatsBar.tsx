
import { MapPin } from "lucide-react";

const StatsBar = () => {
  return (
    <div className="rounded-lg mt-4 p-4 flex items-center justify-around flex-wrap gap-4 premium-shadow" style={{ background: 'linear-gradient(135deg, #0D2A5C, #1E3A8A)', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <span className="text-gold-light text-lg">🏆</span>
          <span className="text-foreground font-bold text-2xl">5</span>
        </div>
        <p className=" text-base text-blue-950 capitalize font-medium">Champions affichés</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
           <MapPin
                      size={25}
                      className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
                    />
          <span className="text-foreground font-bold text-2xl">310 <span className="text-sm font-normal">km</span></span>
        </div>
        <p className="text-base text-blue-950 capitalize font-medium">Distance moyenne</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-gold-light text-lg">⚡</span>
          <span className="text-gold-light font-bold text-2xl gold-text-glow">1428.54 <span className="text-sm  font-bold">m/min</span></span>
        </div>
        <p className="text-base text-blue-950 capitalize font-medium">Vitesse moyenne des gagnants</p>
      </div>
    </div>
  );
};

export default StatsBar;
