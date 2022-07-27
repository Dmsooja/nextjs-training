import React from 'react';
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


const Image = ({ slice }) => (
  <section>
    <figure className="grid grid-cols-1 gap-4">
      {prismicH.isFilled.image(slice.primary.image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={slice.primary.image} layout="responsive" />
        </div>
      )}
      {prismicH.isFilled.richText(slice.primary.caption) && (
        <figcaption className="text-center tracking-tight text-primarygreen">
          <PrismicRichText field={slice.primary.caption} />
        </figcaption>
      )}
    </figure>
  </section>
)

export default Image