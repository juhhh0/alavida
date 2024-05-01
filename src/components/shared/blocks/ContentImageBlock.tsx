import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentImageBlock({ data }: { data: any }) {
  return (
    <section className="bg-yellow-500 p-3">
      <div className="max-w w-full mx-auto flex flex-col lg:flex-row gap-3">
        <div className="lg:w-1/2 flex items-center">
          <BlocksRendererClient content={data.content} />
        </div>
        <div className="lg:w-1/2">
          <img className="max-w-full" src={"http://strapi.juhh.fr" + data.image.url} alt="" />
        </div>
      </div>
    </section>
  );
}
