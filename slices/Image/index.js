import React from 'react';
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


const Image = ({ slice }) => (
  <div className='container mx-auto px-4 py-4'>
    <figure className="grid grid-cols-1 gap-4 ">
      {prismicH.isFilled.image(slice.primary.image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={slice.primary.image} layout="responsive"/>
        </div>
      )}
      {prismicH.isFilled.richText(slice.primary.caption) && (
        <figcaption className="text-center tracking-tight text-darkgreen">
          <PrismicRichText field={slice.primary.caption} />
        </figcaption>
      )}
    </figure>
  </div>
)

export default Image