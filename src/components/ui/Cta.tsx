import Link from "next/link";
import React from "react";

interface Cta {
  link: string,
  label: string
}

export default function Cta({ data }: { data: Cta }) {
  return (
    <Link
      className="bg-alavida-dark-yellow brightness-100 hover:brightness-90 transition-all font-bold text-black w-fit px-7 py-4 text-sm uppercase tracking-[1px]"
      href={data.link}
    >
      {data.label}
    </Link>
  );
}
