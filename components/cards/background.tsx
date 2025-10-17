import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Born in <span className="text-white underline">Comilla</span>, raised in <span className="text-white underline">Dhaka, Bangladesh</span>,
          my journey into the world of technology began with a deep curiosity for
          how things work behind the screen. From an early age, I was fascinated
          by <span className="text-white underline">computers and creativity</span>,
          spending countless hours exploring design tools, coding tutorials, and
          the magic of building something from scratch. <br />
          <br />
          This passion grew stronger during my academic years at&nbsp;
          <span className="text-white underline">Green University of Bangladesh</span>,
          where I am pursuing a degree in&nbsp;
          <span className="text-white underline">Computer Science and Engineering (CSE)</span>.
          My academic foundation, combined with hands-on experience, has shaped
          me into a developer who values both technical precision and visual design.
          <br />
          <br />
          Over the past few years, I have worked as a&nbsp;
          <span className="text-white underline">Web Developer and Designer</span>,
          leading and contributing to full-stack projects such as&nbsp;
          <span className="text-white"> Client Management System </span> and
          <span className="text-white"> Project Management System</span>. These
          experiences honed my ability to blend functionality with aesthetics,
          delivering digital solutions that not only work flawlessly but also
          engage users effectively.
          <br />
          <br />
          Beyond development, I’m deeply interested in&nbsp;
          <span className="text-white underline">AI technologies</span>,
          <span className="text-white underline"> user experience</span>,
          and <span className="text-white underline">creative problem-solving</span>.
          Each project I take on is an opportunity to innovate, learn, and
          push the boundaries of what’s possible on the web. <br />
          <br />
          <span className="text-white italic">
            I believe technology should not only solve problems but also inspire
            people. Through my work, I aim to craft meaningful digital experiences
            that connect creativity, intelligence, and human impact.
          </span>
        </p>
      </div>
    </Card>
  );
}
