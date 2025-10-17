import NextJsImg from "@/public/assets/images/stack/nextjs.png";
import ReactJsImg from "@/public/assets/images/stack/reactjs.png";
import NodeJsImg from "@/public/assets/images/stack/nodejs.png";
import ExpressJsImg from "@/public/assets/images/stack/expressjs.png";
import FramerMotionImg from "@/public/assets/images/stack/framer-motion.png";
import GsapImg from "@/public/assets/images/stack/gsap.png";

import JavascriptImg from "@/public/assets/images/stack/js.png";
import TypescriptImg from "@/public/assets/images/stack/ts.png";
import TailwindImg from "@/public/assets/images/stack/tailwind.png";
import HtmlImg from "@/public/assets/images/stack/html.png";
import CssImg from "@/public/assets/images/stack/css.png";

import SassImg from "@/public/assets/images/stack/sass.png";
import ShadcnUiImg from "@/public/assets/images/stack/shadcnui.png";
import MaterialUiImg from "@/public/assets/images/stack/materialui.png";
import DaisyUiImg from "@/public/assets/images/stack/daisyui.png";

import NestJsImg from "@/public/assets/images/stack/nestjs.jpg";

import GraphQLImg from "@/public/assets/images/stack/graphql.png";
import DockerImg from "@/public/assets/images/stack/docker.png";
import AWSImg from "@/public/assets/images/stack/aws.png";

export const stackData = [
  {
    title: "Basics",
    stack: [
      { id: 0, title: "HTML 5", image: HtmlImg, bgColor: "" },
      { id: 1, title: "CSS 3", image: CssImg, bgColor: "" },
      { id: 2, title: "JavaScript", image: JavascriptImg, bgColor: "#F0DB4F" },
      { id: 3, title: "TypeScript", image: TypescriptImg, bgColor: "#3179C7" },
    ],
  },
  {
    title: "Frontend",
    stack: [
      { id: 0, title: "React JS", image: ReactJsImg, bgColor: "" },
      { id: 1, title: "Next JS", image: NextJsImg, bgColor: "" },
    ],
  },
  {
    title: "Styling",
    stack: [
      { id: 0, title: "Sass", image: SassImg, bgColor: "" },
      { id: 1, title: "Tailwind CSS", image: TailwindImg, bgColor: "" },
      { id: 2, title: "Shadcn/ui", image: ShadcnUiImg, bgColor: "#000" },
      { id: 3, title: "Material UI", image: MaterialUiImg, bgColor: "" },
      { id: 4, title: "Daisy UI", image: DaisyUiImg, bgColor: "" },
    ],
  },
  {
    title: "Animation",
    stack: [
      { id: 0, title: "Framer Motion", image: FramerMotionImg, bgColor: "" },
      { id: 1, title: "GSAP", image: GsapImg, bgColor: "" },
    ],
  },
  {
    title: "Backend",
    stack: [
      { id: 0, title: "Node JS", image: NodeJsImg, bgColor: "" },
      { id: 1, title: "Express JS", image: ExpressJsImg, bgColor: "" },
      { id: 2, title: "Nest JS", image: NestJsImg, bgColor: "#D31D58" },
      { id: 3, title: "GraphQL", image: GraphQLImg, bgColor: "#E10098" },
      { id: 4, title: "Docker", image: DockerImg, bgColor: "#0db7ed" },
      { id: 5, title: "AWS", image: AWSImg, bgColor: "#FF9900" },
    ],
  },
];
