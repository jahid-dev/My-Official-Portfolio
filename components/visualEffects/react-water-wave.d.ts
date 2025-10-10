"use client"
declare module 'react-water-wave' {
    import { FC} from 'react';
  
    interface WaterWaveProps {
      imageUrl: string;
      dropRadius?: number;
      resolution?: number;
      perturbance?: number;
      children?: React.ReactNode;
    }
  
    const WaterWave: FC<WaterWaveProps>;
    export default WaterWave;
  }
  