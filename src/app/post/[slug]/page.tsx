import ContentBlock from "@/components/shared/blocks/ContentBlock";
import BlocksRendererClient from "@/components/shared/BlocksRendererClient";
import Hero from "@/components/shared/Hero";
import { getArticleData } from "@/data/loaders";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getArticleData(params.slug)

  if (!data) return <></>;
  return (
    <>
    <Hero data={{title: data.title, image: data.image}}/>
    <section className="bg-white">
      <ContentBlock data={data.intro} />
    </section>
    </>
  );
}
