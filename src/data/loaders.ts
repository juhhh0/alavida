import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();


async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getGlobalPageData() {
  const url = baseUrl + "/api/navbar?populate=*"

  return await fetchData(url);
}

export async function getHomePageData(){
    const url = baseUrl + "/api/home-page?populate=*"

    return await fetchData(url);
}

export async function getPageData(slug: string){
    const url = baseUrl + "/api/pages?filters[slug][$eq]=" + slug

    const response = await fetchData(url)

    const data = response?.data[0]

    return data;

}

export async function getArticleData(slug: string){
    const url = baseUrl + "/api/articles?filters[slug][$eq]=" + slug

    const response = await fetchData(url)

    const data = response?.data[0]

    return data;
}

