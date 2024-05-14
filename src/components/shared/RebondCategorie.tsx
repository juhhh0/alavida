import React from "react";
import Card from "../ui/Card";
import Link from "next/link";

export default function RebondCategorie({ data,categorie }: { data: any, categorie: any }) {
  return (
    <div className="max-w mx-auto">
        <p className="text-3xl font-bold pt-3 pb-8">Retrouvez nos autres articles <Link href={"/voyages/" + categorie?.slug}>{categorie?.name}</Link></p>
        <div className="flex flex-col lg:flex-row justify-center items-center px-3 gap-3">
      {data.map((item: any, i: number) => (
          <Card key={i} data={item} />
        ))}
        </div>
    </div>
  );
}
