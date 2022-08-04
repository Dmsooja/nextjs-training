import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { RichText } from "prismic-reactjs";
import { components } from "../slices";

const __allComponents = { ...components }

export const Header = ({ menu }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4">
    <div className="mx-auto flex max-w-5xl items-baseline md:items-center">
      <PrismicLink href="/" className="relative -m-4 p-4 text-xl font-black">
        <PrismicText field={menu.data?.title} />
      </PrismicLink>
      <nav className="flex-grow">
        <ul className="-ml-5 -mt-5 flex justify-end">
          {/* {menu?.data?.slices?.map((item, idx) => {
            console.log(item);
            return (
              <li key={idx} className="pt-5 pl-5">
                <RichText render={item} />
                <PrismicLink field={item} className="text-neutral-500">
                  <PrismicText field={item} />
                </PrismicLink>
              </li>
            )
          })} */}
            <SliceZone slices={menu.data.slices} components={__allComponents} />
        </ul>
      </nav>
    </div>
  </header>
);
