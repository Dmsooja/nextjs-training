import React from "react";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Link, RichText } from 'prismic-reactjs';

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

const socialLinks = (footer) => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {footer.data?.socialSection.map((item, idx) => (
        <a key={idx} href={Link.url(item.socialLink)} className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">toto</span>
          {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
          <img className="h-6 w-6" src={item.socialIcon.url} alt={item.socialIcon.alt} />
        </a>
      ))}
    </div>
  )
}

const copyright = (footer) => {
  return (
    <span className="px-4 mt-8 text-center text-base text-gray-400"><RichText render={footer.data?.copyright} /></span>
  )
}

export function Footer({ footer }) {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {navLinks(footer)}
        {socialLinks(footer)}
        {copyright(footer)}
      </div>
    </footer >
  )
}