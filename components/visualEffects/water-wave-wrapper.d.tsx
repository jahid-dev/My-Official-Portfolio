"use client";

import { FC, ReactNode } from "react";
import WaterWave from "react-water-wave";

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  children: () => ReactNode;
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius = 3,
  perturbance = 3,
  resolution = 2048,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children as any}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
