import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certification">
      <Timeline>
        {CertificationsData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationsData = [
  {
    date: "2023",
    title: "Complete Web Development Course",
    subTitle: "Programming Hero",
  },
];
