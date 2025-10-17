import Button from "./button";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaXTwitter className="w-5 h-5" />,
    link: "https://x.com/jahidhassanf/", 
    username: "jahidhassanf",
  },
  {
    icon: <FaFacebookF className="w-5 h-5" />,
    link: "https://www.facebook.com/jahidhassanf/", // adjust if needed
    username: "jahidhassanf",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/jahid-hassan-71349a1aa/",
    username: "jahid-hassan-71349a1aa",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/xahid_hassan/",
    username: "xahid_hassan",
  },
];
