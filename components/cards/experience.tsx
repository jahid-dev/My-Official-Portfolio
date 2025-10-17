import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const experiencesData = [
  {
    date: "2023 — 2025",
    title: "Full Stack Developer",
    subTitle: "Wixerd",
    tag: "Remote",
  },
];
