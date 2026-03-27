interface SideAdProps {
  size: "tall" | "small";
  side: "left" | "right";
  showSponsor?: boolean; 
}

const SideAd = ({ size, side, showSponsor = true }: SideAdProps) => {
  const isTall = size === "tall";
  return (
    <div className={`rounded-lg flex flex-col items-center justify-center text-center p-3 premium-shadow ${
      isTall ? 'min-h-[400px]' : 'min-h-[180px]'
    }`} style={{ background: 'linear-gradient(180deg, #0A1F44, #0D2A5C)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
      {showSponsor && (
        <>
          <p className="font-playfair italic text-gold text-lg mb-1 !text-white ">Sponsor</p>
          <p className="font-playfair italic text-gold-light text-lg !leading-0 gold-text-glow">Premium</p>
        </>
      )}
      <div className={` rounded ${showSponsor ? 'mt-3' : 'mt-0'}  py-6 w-full`}>
        <p className="text-white text-base  uppercase tracking-wider  font-bold">Votre</p>
        <p className="text-white text-base  uppercase tracking-wider font-bold">Publicité</p>
        <p className="text-white text-base  uppercase tracking-wider font-bold">Ici</p>
        <p className="text-gold/50 text-xs text-white mt-2">
          {isTall ? '160 × 600' : '300 × 250'}
        </p>
        {isTall && (
          <p className="text-muted-foreground !text-sm !text-yellow-300 mt-1">
            Habillage colonne {side === 'left' ? 'gauche' : 'droite'}
          </p>
        )}
      </div>
    </div>
  );
};

export default SideAd;