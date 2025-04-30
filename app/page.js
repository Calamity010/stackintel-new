import ExploreFeatures from "@/components/ExploreFeatures";
import Hero from "@/components/Hero";
import SimplifySection from "@/components/SimplifySection";
import Slider from "@/components/Slider";
import Ultra from "@/components/Ultra";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Ultra />
        <Slider />
        <ExploreFeatures />
        <SimplifySection />
      </main>
    </div>
  );
}
