import React from "react";
import BlocksRendererClient from "../BlocksRendererClient";
import Step from "./Step";

export default function ContentBlock({ data }: { data: any }) {
  return (
    <section className="bg-white py-10">
      <div className="max-w px-4 mx-auto">
        <BlocksRendererClient content={data.content} />
        {data.steps && data.steps.map((step: any, i: number) => (
          <Step data={step} key={i}/>
        ))}
      </div>
    </section>
  );
}
