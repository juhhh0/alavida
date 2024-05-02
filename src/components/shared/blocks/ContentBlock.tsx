import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentBlock({ data }: { data: any }) {
  // console.log(data)
  return (
    <section className="bg-white">
      <div className="max-w mx-auto">
        <BlocksRendererClient content={data} />
      </div>
    </section>
  );
}
