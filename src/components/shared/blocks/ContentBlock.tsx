import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";

export default function ContentBlock({ data }: { data: any }) {
  return (
    <section className="bg-white py-10">
      <div className="max-w px-4 mx-auto">
        <BlocksRendererClient content={data} />
      </div>
    </section>
  );
}
