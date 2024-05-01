import React from "react";
import ContentImageBlock from "./blocks/ContentImageBlock";
import ContentBlock from "./blocks/ContentBlock";

export default function Sections({ data }: { data: any[] }) {
  return (
    <>
      {data.map((item, i) => {
        if (item.__component == "blocks.content") {
          return <ContentBlock key={i} data={item} />;
        }
        if (item.__component == "blocks.content-image") {
          return <ContentImageBlock key={i} data={item} />;
        }
      })}
    </>
  );
}
