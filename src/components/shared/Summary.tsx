"use client";
import React from "react";

export default function Summary({ data }: { data: any }) {
  let list: string[] = [];

  //@ts-ignore
  data.forEach((element) => {
    //@ts-ignore
    element.content.forEach((elem) => {
      if (elem.type == "heading") {
        list.push(elem.children[0].text);
      }
    });
  });

  console.log(list);

  return (
    <div className="bg-white pb-10">
      <ol className="max-w mx-auto flex flex-col gap-3 list-decimal	list-inside">
       <span className="text-blue-900 font-medium text-2xl">Sommaire</span> 
        {list.length > 0 &&
          list.map((item) => (
            <li>
              <a className="hover:text-blue-900 hover:underline" href={"#" + item}>{item}</a>
            </li>
          ))}
      </ol>
    </div>
  );
}
