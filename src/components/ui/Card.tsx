"use client";
import { Post } from "@/lib/types";
import React, { useState } from "react";
import Cta from "./Cta";

export default function Card({ data }: { data: Post }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="w-full lg:w-96 h-[300px] lg:h-[460px] relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-full w-full brightness-[55%] bg-cover absolute bg-center transition-all ${hover ? "scale-110" : ""}`}
        style={{
          backgroundImage: `url(${"http://strapi.juhh.fr" + data.image.url})`,
        }}
      ></div>
      <div className="text-white absolute z-10 bottom-0 p-6">
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p className="mb-4">{data.description}</p>
        <Cta data={{ link: "/post/" + data.slug, label: "Voir l'article" }} />
      </div>
    </article>
  );
}
