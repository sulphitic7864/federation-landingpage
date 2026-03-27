import Header from "@/components/Header";
import SponsorBanner from "@/components/SponsorBanner";
import Leaderboard from "@/components/Leaderboard";
import StatsBar from "@/components/StatsBar";
import CompetitionHistory from "@/components/CompetitionHistory";
import SideAd from "@/components/SideAd";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mt-40">
      <SponsorBanner />
      </div>

      {/* Main content with side ads */}
      <main className="flex-1  w-full px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr_160px] gap-4">
          {/* Left sidebar ads */}
          <div className="hidden lg:flex flex-col gap-4">
            <SideAd size="tall" side="left"  />
            <SideAd size="small" side="left" showSponsor={false} />
          </div>

          {/* Center content */}
          <div className="">
            <Leaderboard />
            <StatsBar />
            <CompetitionHistory />
          </div>

          {/* Right sidebar ads */}
          <div className="hidden lg:flex flex-col gap-4">
            <SideAd size="tall" side="right"  />
            <SideAd size="small" side="right" showSponsor={false} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
