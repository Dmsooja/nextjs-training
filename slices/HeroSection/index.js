import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs';

const HeroSection = ({ slice }) => (
  <section>
    <div className="bg-white">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img className="h-full w-full object-cover" src={slice.primary.primaryImage.url} alt={slice.primary.primaryImage.alt} />
                {/* Second Image */}
                {slice.variation === "twoimages" ?
                  < div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                      className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={slice.primary.secondaryImage.url} alt={slice.primary.secondaryImage.alt} />
                  </div>
                  : null
                }
                <div className="absolute inset-0 bg-indigo-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white"><RichText render={slice.primary.title} /></span>
                </h1>
                <span className="mt-6 max-w-lg mx-auto text-center text-xl text-primarygreen sm:max-w-3xl">
                  <RichText render={slice.primary.description} />
                </span>
                {slice.variation !== "heroSectionNoCta" ?
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href={Link.url(slice.primary.primaryCta)}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-opacity-80 bg-primaryorange hover:bg-white sm:px-8"
                      >
                        <RichText render={slice.primary.primaryCtaText} />
                      </a>
                      <a
                        href={Link.url(slice.primary.secondaryCta)}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white bg-opacity-80 hover:bg-primarygreen sm:px-8"
                      >
                        <RichText render={slice.primary.secondaryCtaText} />
                      </a>
                    </div>
                  </div>
                  : null
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section >
)

export default HeroSection