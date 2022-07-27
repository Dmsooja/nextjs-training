import React from 'react';
import { RichText } from 'prismic-reactjs';

const Features = ({ slice }) => (
  <section>
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <span className="text-base text-primaryorange font-semibold tracking-wide uppercase"><RichText render={slice.primary.title} /></span>
          <span className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <RichText render={slice.primary.subTitle}  />
          </span>
          <span className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            <RichText render={slice.primary.description} />
          </span>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {slice?.items?.map((item, i) => (
              <div key={i} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 mr-4 rounded-md bg-primarygreen text-black">
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                    <img className="h-6 w-6" aria-hidden="true" src={item.descriptionIcon.url} alt={item.descriptionIcon.alt} />
                  </div>
                  <div className="ml-16 text-lg leading-6 font-medium text-gray-900"><RichText render={item.descriptionTitle} /></div>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500"><RichText render={item.descriptionDetail} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
)

export default Features