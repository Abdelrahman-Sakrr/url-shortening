import HeroSection from "@/HeroSection";
import StatsSection from "./StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection />
        <StatsSection />
      </main>
    </div>
  );
}
