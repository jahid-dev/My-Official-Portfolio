import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/my/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";

export default function ResumeCard() {
  const resumeUrl = "/Jahid25.pdf";

  return (
    <Card className="md:h-full p-6 relative">
      {/* Intro Text */}
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground mb-6">
        I am a passionate Web Developer and Digital Designer with over 2 years
        of experience turning ideas into impactful, client-focused web
        solutions. Skilled in the MERN stack, responsive UI/UX design, and
        modern web technologies, I thrive on creating experiences that are not
        only functional but also visually captivating. Every project I take on
        is an opportunity to blend creativity, precision, and innovation,
        delivering digital solutions that empower businesses and inspire users.
        🚀✨
      </p>

      {/* Signature */}
      <div className="mb-6">
        <Image src={SignatureImg} alt="Jahid Hassan Signature" />
      </div>

      {/* Socials and Resume Button */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />

        {/* Download Resume Button */}
        <a href={resumeUrl} download="Jahid_Hassan_Resume.pdf">
          <Button>
            <FaDownload className="mr-2" />
            Download Resume
          </Button>
        </a>
      </div>
    </Card>
  );
}