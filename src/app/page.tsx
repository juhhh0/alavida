import HomeAbout from "@/components/custom/HomeAbout";
import HomeHero from "@/components/custom/HomeHero";
import { getHomePageData } from "@/data/loaders";

export default async function Home() {
    const data = await getHomePageData();

  return (
    <>
      <HomeHero data={data} />
      <HomeAbout data={data} /> 
    </>
  );
}
