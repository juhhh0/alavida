import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentImage({ data }: { data: any }) {
  console.log(data);
  return (
    <section className="bg-yellow-500">
      <div className="max-w-[1280px] w-full mx-auto">
        <div>
          <BlocksRendererClient content={data.content} />
        </div>
      </div>
    </section>
  );
}
