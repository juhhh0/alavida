import { getPageData } from "@/data/loaders";

export default async function Page({ params }: { params: { slug: string } }) {

  const data = await getPageData(params.slug)

  if (!data) return <></>;

  return <h1 className="text-black">{data.Titre}</h1>;
}
