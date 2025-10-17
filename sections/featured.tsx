import FeaturedCard from "@/components/cards/featured/featured-card";
import ExpandableFeatured from "@/components/expendables/expendable-features";
import Heading from "@/components/heading/heading";

import { featuredData } from "@/data";

const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/*Heading*/}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/*Main Featured Card*/}
      <div className="text-center text-2xl font-semibold text-gray-300 mb-8">Upcoming Projects</div>
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}