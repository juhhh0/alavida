import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentImageBlock({ data }: { data: any }) {
  return (
    <section className="bg-yellow-500">
      <div className="max-w-[1280px] w-full mx-auto lg:flex">
        <div className="w-1/2 p-2">
          <BlocksRendererClient content={data.content} />
        </div>
        <div className="w-1/2 p-2">
          <img src={"http://strapi.juhh.fr" + data.image.url} alt="" />
        </div>
      </div>
    </section>
  );
}
