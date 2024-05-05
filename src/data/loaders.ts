import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import qs from "qs";

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
  const url = baseUrl + "/api/navbar?populate=*";

  return await fetchData(url);
}

export async function getHomePageData() {

  const homeUrl = new URL("/api/home-page", baseUrl);

  homeUrl.search = qs.stringify({
    populate: {
      heroLogo: {
        populate: true,
      },
      heroImage: {
        populate: true,
      },
      blocks: {
        populate: "*"     
      },
    },
  });

  const data = await fetchData(homeUrl.href);

  const postsUrl =
    baseUrl +
    "/api/pages?populate=*&pagination[limit]=3&sort[0]=createdAt:desc";
  const posts = await fetchData(postsUrl);

  const homeData = {
    hero: {
      image: data.heroImage,
      description: data.heroDescription,
      logo: data.heroLogo,
    },
    posts: posts.data,
    blocks: data.blocks,
  };

  return homeData;
}

export async function getPageData(slug: string) {

  const url = new URL("/api/pages", baseUrl)
  url.search = qs.stringify({
    filters: {
      $or: [
        { slug: { $containsi: slug } },
      ],
    },
    populate: {
      image: {
        populate: true,
      },
      categories: {
        populate: "*"
      },
      blocks: {
          on: {
            "blocks.content-image": {
              populate: "*"
            },
            "blocks.image-image": {
              populate: "*"
            },
            "blocks.content": {
              populate: {
                steps: {
                  populate: "*"
                }
              }
            }
        }
      }
    }
  })

  const data = await fetchData(url.href)

  // const othersUrl = new URL("/api/pages", baseUrl)
  // othersUrl.search = qs.stringify({
  //   filters: {
  //     categories: {
  //       name: {
  //         $in: "Amérique Latine"
  //       }
  //     }
  //   }

  // })

  // const othersData = await fetchData(othersUrl.href)
  // console.log(othersData," oth")

  return data.data[0];
}

export async function getArticleData(slug: string) {
  const url = baseUrl + "/api/articles?populate=*&filters[slug][$eq]=" + slug;

  const response = await fetchData(url);

  const data = response?.data[0];

  return data;
}
