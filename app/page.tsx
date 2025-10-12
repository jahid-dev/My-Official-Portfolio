"use client"
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper.d";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import { FaA } from "react-icons/fa6";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {() => <div className="w-full p-10">
                <div className="max-w-2xl mx-auto">
                  <Card title="Ui components">
                    <div className="grid grid-cols-4">
                      <Button>Basic button</Button>
                      <Button>
                        <GoHomeFill/>
                        Basic button
                        </Button>
                      <Button isIcon>
                        <FaUser/>
                      </Button>
                      <Button link="https://www.google.com">Google</Button>
                    </div>
                    <Input type="text" placeholder="Full name" name="fullName"/>
                    <Input type="text" placeholder="Full name" name="fullName" icon={<FaUser/>} />
                    <TextArea  placeholder="Full name" name="fullName"  />
                    <TextArea  placeholder="Full name" name="fullName" icon={<FaUser/> }/>
                    <Profile/>
                    <MagneticWrapper className="w-[350]">
                      <FancyButton text="Contact Me" icon={<FaArrowRight/>} />
                    </MagneticWrapper>
                    <LiveClock timeZone = "Bangladesh/Dhaka"/>
                    <MagneticWrapper>
                      <ScrollDown/>
                    </MagneticWrapper>
                  </Card>
                </div>
            </div>}
    </WaterWaveWrapper>
  );
}
