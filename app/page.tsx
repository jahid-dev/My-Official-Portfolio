"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper.d";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {() => (
        <div>
          <div className="py-8">
            <LandingSection />
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
