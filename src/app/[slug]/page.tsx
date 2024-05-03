import ContentBlock from "@/components/shared/blocks/ContentBlock";
import Hero from "@/components/shared/Hero";
import Sections from "@/components/shared/Sections";
import { getPageData } from "@/data/loaders";

export default async function Page({ params }: { params: { slug: string } }) {

  const data = await getPageData(params.slug)
  if (!data) return <></>;
  return (
    <>
    <Hero data={{title: data.title, image: data.image, date: data.type == "article" ? new Date(data.createdAt).toLocaleDateString() : ""}}/>
    <section className="bg-white pt-12">
      <ContentBlock data={data.intro} />
    </section>
    {data.blocks && <Sections data={data.blocks}/>}
    </>
  );
}
