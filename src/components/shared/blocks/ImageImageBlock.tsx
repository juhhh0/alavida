import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ImageImageBlock({ data }: { data: any }) {
  return (
    <div className="bg-white">
      <div className="max-w mx-auto">
        <BlocksRendererClient content={data.content} />
        <div className="flex max-w-full">
          <div className="w-1/2 p-5">
            <img
              className="block flex-1"
              src={"http://strapi.juhh.fr" + data.leftImage.url}
              alt=""
            />
          </div>
          <div className="w-1/2 p-5">
            <img
              className="block flex-1"
              src={"http://strapi.juhh.fr" + data.rightImage.url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
