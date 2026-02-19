import { HomeNavbar } from "../../components/home/HomeNavbar";
import { Hero } from "../../components/home/Hero";
import { Mission } from "../../components/home/Mission";
import { PerformanceGrid } from "../../components/home/PerformanceGrid";
import { TechnicalBreakdown } from "../../components/home/TechnicalBreakdown";
import { HomeFooter } from "../../components/home/HomeFooter";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <HomeNavbar />
      <Hero />
      <Mission />
      <PerformanceGrid />
      <TechnicalBreakdown />
      <HomeFooter />
    </main>
  );
}
