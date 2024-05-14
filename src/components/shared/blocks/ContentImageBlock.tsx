import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentImageBlock({ data }: { data: any }) {
  return (
    <section className={`relative ${data.backgroundColor == "yellow" ? "bg-alavida-yellow py-20" : "bg-white py-10"}`}>
     { data.backgroundColor == "yellow" && <img src="/images/wave-top.svg" alt="" className="absolute w-full top-0" />}
      <div className={`max-w w-full mx-auto flex flex-col px-4 ${data.imagePosition == "left" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-3`}>
        <div className="lg:w-1/2 flex items-center">
          <BlocksRendererClient content={data.content} />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <img className="max-w-full max-h-[700px]" src={"http://strapi.juhh.fr" + data.image?.url} alt="" />
        </div>
      </div>
      {data.backgroundColor == "yellow" && <img src="/images/wave-bot.svg" className="absolute bottom-0 w-full" alt="" />}
    </section>
  );
}
