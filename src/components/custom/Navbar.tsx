"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'

import { useState } from "react";

export default function Navbar ({ data }: { data: any })  {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const handleMenuClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const scroll = () => {
      const scrollTop = window.scrollY

      setScrolled(scrollTop != 0) 
    }
    scroll()
    window.addEventListener('scroll', scroll);

    const resize = () => {
      if(window.innerWidth > 1024){
        setOpen(false)
      }
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    };
  }, [])
  return (
    <nav className={`fixed h-28 h- z-20 top-0 left-0 w-full backdrop-brightness-90 py-4 px-10 text-white${scrolled || open ? " scrolled bg-white !text-[#283787]" : ""}`}>
      <div className="max-w h-full  mx-auto flex gap-8 items-center justify-between ">
        <Link className="h-full" href={"/"}><img className="h-full" src="/images/logo.png"  alt="" /></Link>
        <ul className="hidden lg:flex gap-6 uppercase text-md font-semibold tracking-wider">
          {data.menu.map((item : any, i: number) => (
            <li key={i}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className={`hidden social-icons lg:flex gap-3`}>
          <li>
            <img src="/icons/icons8-instagram.svg" alt="" />
          </li>
          <li>
            <img src="/icons/icons8-pinterest.svg" alt="" />
          </li>
          <li>
            <img src="/icons/icons8-tic-tok.svg" alt="" />
          </li>
          <li>
            <Link href="/search">

            <img src="/icons/icons8-chercher.svg" alt="" />
            </Link>
          </li>
        </ul>
        <button className={`lg:hidden w-6 social-icons`} onClick={handleMenuClick}>
          <img src="/icons/icons8-menu.svg" alt="" />
        </button>
      </div>
      {open && (
        <div className={`lg:hidden absolute top-28 left-0 w-full flex flex-col items-center gap-4 pb-4 ${scrolled || open ? "bg-white" : ""}`}>
          <ul className="uppercase text-xs font-semibold tracking-wider flex flex-col gap-2">
            <li className="py-2">Destinations</li>
            <li className="py-2">Préparatifs</li>
            <li className="py-2">Mon Podcast</li>
            <li className="py-2">Alavida</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Boutique</li>
          </ul>
          <ul className="social-icons flex gap-3">
            <li>
              <img src="/icons/icons8-instagram.svg" alt="" />
            </li>
            <li>
              <img src="/icons/icons8-pinterest.svg" alt="" />
            </li>
            <li>
              <img src="/icons/icons8-tic-tok.svg" alt="" />
            </li>
            <li>
              <img src="/icons/icons8-chercher.svg" alt="" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
