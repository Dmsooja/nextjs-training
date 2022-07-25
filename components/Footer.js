import React from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";

const navLinks = (footer) => {
  return (
    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      {footer.data?.menuLinks.map((menuLink, idx) => {
        return (
          <div key={idx} className="px-5 py-2">
            {/* <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
            {item.name}
          </a> */}
            <PrismicLink field={menuLink.link} className="text-base text-gray-500 hover:text-gray-900">
              <PrismicText field={menuLink.label} />
            </PrismicLink>
          </div>
        )
      })}
    </nav>
  )
}



export function Footer({ footer }) {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {navLinks(footer)}

      </div>
    </footer >
  )
}