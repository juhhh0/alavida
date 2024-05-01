import BlocksRendererClient from "@/components/shared/BlocksRendererClient";
import { getArticleData } from "@/data/loaders";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getArticleData(params.slug)

  if (!data) return <></>;
  return (
    <>
      <h1 className="text-black">{data.Titre}</h1>
      <BlocksRendererClient content={data.Contenu} />
    </>
  );
}
