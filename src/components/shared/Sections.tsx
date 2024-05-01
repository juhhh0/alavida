import React from "react";
import ContentImage from "./blocks/ContentImage";

export default function Sections({ data }: { data: any[] }) {
  return (
    <>
      {data.map((item) => {
        if ((item.__component == "blocks.content-image")) {
          return <ContentImage data={item} />;
        }
      })}
    </>
  );
}
