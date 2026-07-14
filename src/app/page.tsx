import BrowseCategories from "@/component/homepage/BrowseCategories";
import CommunityStatistics from "@/component/homepage/CommunityStatistics";
import Hero from "@/component/homepage/Hero";
import RecentlyFoundItems from "@/component/homepage/RecentlyFoundItems";
import RecentlyLostItems from "@/component/homepage/RecentlyLostItems";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <RecentlyLostItems></RecentlyLostItems>
      <RecentlyFoundItems></RecentlyFoundItems>
      <BrowseCategories></BrowseCategories>
      <CommunityStatistics></CommunityStatistics>
    </div>
  );
}
