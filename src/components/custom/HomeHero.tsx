"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Cta from "../ui/Cta";

interface Props {
  hero: {
      image: any,
      description: any,
      logo: any
  };
}

export default function HomeHero({ hero }: Props) {
  return (
    <div className="h-screen relative flex items-center text-white">
      <div
        className="fixed -z-10 w-full h-full bg-bottom bg-cover brightness-75"
        style={{
          backgroundImage: `url(https://strapi.juhh.fr${hero.image.url})`,
        }}
      ></div>
      <div className="relative z-10 px-4 w-full max-w-4xl m-auto">
        <img
          src={`https://strapi.juhh.fr${hero.logo.url}`}
          className="max-w-md w-full m-auto"
          alt=""
        />
        <hr className="w-1/2 m-auto mt-4 mb-2" />
        <div className="home-hero text-center">
          <BlocksRenderer content={hero.description} />
        </div>
        <div className="mx-auto w-fit mt-4">
         <Cta data={{link: "/destinations", label: "Nos Destinations"}} />
        </div>
      </div>
    </div>
  );
}
