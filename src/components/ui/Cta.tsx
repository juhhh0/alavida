import Link from "next/link";
import React from "react";

interface Cta {
  link: string,
  label: string
}

export default function Cta({ data }: { data: Cta }) {
  return (
    <Link
      className="bg-yellow-500 hover:bg-yellow-600 font-medium text-black w-fit px-4 py-2 text-sm uppercase tracking-wider"
      href={data.link}
    >
      {data.label}
    </Link>
  );
}
