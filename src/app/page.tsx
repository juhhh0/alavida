import HomeHero from "@/components/custom/HomeHero";
import Sections from "@/components/shared/Sections";
import Card from "@/components/ui/Card";
import { getHomePageData } from "@/data/loaders";
import { Post } from "@/lib/types";

export default async function Home() {
    const data = await getHomePageData();

  return (
    <>
      <HomeHero hero={data.hero} />
      <section className="flex flex-col lg:flex-row justify-center items-center px-3 gap-3 py-16 bg-white">
      {
        data.posts && data.posts.map((item : Post) => (
          <Card data={item}/>
        ))
      } 
      </section>
      <Sections data= {data.blocks}/>
    </>
  );
}
