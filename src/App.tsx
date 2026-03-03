import { CRTFilter } from "./components/CRTFilter";
import { Watermark } from "./components/Watermark";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Timeline } from "./components/Timeline";
import { CallToAction } from "./components/CallToAction";

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#F6287D] selection:text-white relative">
      <CRTFilter />
      <Watermark />
      
      <div className="relative z-10">
        <Hero />
        <BentoGrid />
        <Timeline />
        <CallToAction />
      </div>
    </main>
  );
}
