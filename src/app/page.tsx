import HeroSection from "@/HeroSection";
import StatsSection from "./StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
        <StatsSection />
      </main>
    </div>
  );
}
