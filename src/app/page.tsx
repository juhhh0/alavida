import HomeAbout from "@/components/custom/HomeAbout";
import HomeHero from "@/components/custom/HomeHero";
import Card from "@/components/ui/Card";
import { getHomePageData } from "@/data/loaders";
import { Post } from "@/lib/types";

export default async function Home() {
    const data = await getHomePageData();

  return (
    <>
      <HomeHero hero={data.hero} />
      <section className="flex flex-col lg:flex-row justify-center items-center px-3 gap-3 my-16">
      {
        data.posts && data.posts.map((item : Post) => (
          <Card data={item}/>
        ))
      } 
      </section>
      <HomeAbout data={data.about} />
    </>
  );
}
