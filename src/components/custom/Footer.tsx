import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 py-8">
      <div className="max-w flex flex-col-reverse md:flex-row gap-6 justify-between items-center mx-auto">
        <ul className="flex-1">
          <li>Mentions légales et CGU</li>
          <li>Politique de confidentialité</li>
        </ul>
        <div className="flex flex-1 flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-2">
            <li>Home</li>
            <li>Destinations</li>
            <li>Préparer son road trip</li>
            <li>Alavida</li>
            <li>Contact</li>
          </ul>

          <ul className={`social-icons flex gap-3`}>
            <li>
              <img src="/icons/icons8-instagram.svg" alt="" />
            </li>
            <li>
              <img src="/icons/icons8-pinterest.svg" alt="" />
            </li>
            <li>
              <img src="/icons/icons8-tic-tok.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <p>News</p>
        </div>
      </div>
    </footer>
  );
}
