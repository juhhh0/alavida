"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface Props {
  data: any;
}

export default function HomeHero({ data }: Props) {
  return (
    <div className="h-screen relative flex items-center text-white">
      <div
        className="absolute w-full h-full bg-bottom bg-cover brightness-75"
        style={{
          backgroundImage: `url(https://strapi.juhh.fr${data.HeroImage.url})`,
        }}
      ></div>
      <div className="relative z-10 px-4 w-full max-w-4xl m-auto">
        <img
          src={`https://strapi.juhh.fr${data.HeroLogo.url}`}
          className="max-w-md w-full m-auto"
          alt=""
        />
        <hr className="w-1/2 m-auto mt-4 mb-2" />
        <div className="home-hero text-center">
          <BlocksRenderer content={data.HeroDescription} />
        </div>
        <a href="/destinations">
          <div className="bg-yellow-500 hover:bg-yellow-600 font-medium text-black w-fit px-4 py-2 text-xs uppercase mx-auto mt-2">
            Nos Destinations
          </div>
        </a>
      </div>
    </div>
  );
}
