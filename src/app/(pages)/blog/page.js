"use client";

import DestinationGuide from "@/app/components/blog/DestinationGuide";
import HolidayInspiration from "@/app/components/blog/HolidayInspiration";
import TravelTrips from "@/app/components/blog/TravelTrips";
import CustomBanner from "@/app/components/common/MainBanner/Banner";

const BlogPage = () => {
  return (
    <>
      <div className="pb-10">
        <CustomBanner
          title={"Explore Our Blogs"}
          subtitle={"Expert Holiday Tips and Guides"}
          url={"/blogBanner.png"}
          Breadcrumb={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog", active: true },
          ]}
        />
        <TravelTrips />
        <DestinationGuide />
        <HolidayInspiration />
      </div>
    </>
  );
};

export default BlogPage;
