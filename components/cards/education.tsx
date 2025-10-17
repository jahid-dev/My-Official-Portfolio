import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const EducationsData = [
  {
    date: "2022 — 2026",
    title: "B.Sc. in Computer Science and Engineering (CSE)",
    subTitle: "Green University of Bangladesh",
  },
  {
    date: "2018 — 2020",
    title: "Higher Secondary Certificate (HSC)",
    subTitle: "Kabi Nazrul Government College, Dhaka",
  },
  {
    date: "2016 — 2018",
    title: "Secondary School Certificate (SSC)",
    subTitle: "Khilgaon Government High School, Dhaka",
  },
];