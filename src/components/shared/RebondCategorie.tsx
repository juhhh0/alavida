import React from "react";
import Card from "../ui/Card";

export default function RebondCategorie({ data,categorie }: { data: any, categorie: any }) {
  return (
    <div className="max-w mx-auto">
        <p className="text-3xl font-bold pt-3 pb-8">Retrouvez nos autres articles {categorie}</p>
        <div className="flex gap-3">
      {data.map((item: any, i: number) => (
          <Card data={item} />
        ))}
        </div>
    </div>
  );
}
