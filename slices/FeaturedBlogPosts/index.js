import React from 'react';
import { RichText, Date as ParseDate, Link } from 'prismic-reactjs';
import { PrismicLink } from '@prismicio/react';

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const FeaturedBlogPosts = ({ slice }) => (

  <section>
    <div className="relative bg-primarygreen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"><RichText render={slice.primary.title} /></span>
            <span className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              <RichText render={slice.primary.description} />
            </span>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {slice?.items?.map((item, idx) => {
              // debugger
              return (
                <div key={idx} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    {slice.variation === "featuredArticlesCr" ?
                      <img className="h-48 w-full object-cover" src={item?.articleLink?.data?.featuredImage.url} alt={item?.articleLink?.data?.featuredImage.alt} />
                      :
                      <img className="h-48 w-full object-cover" src={item.articleImage.url} alt={item.articleImage.alt} />
                    }
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      {/* <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p> */}
                      {slice.variation === "featuredArticlesCr" ?
                        <a href={Link.url(item.articleLink)} className="block mt-2">
                          <span className="text-xl font-semibold text-gray-900"><RichText render={item?.articleLink?.data?.articleTitle} /></span>
                          <span className="mt-3 text-base text-gray-500"><RichText render={item?.articleLink?.data?.articleDescription} /></span>
                        </a>
                        :
                        <a href={Link.url(item.articleLink)} className="block mt-2">
                          <span className="text-xl font-semibold text-gray-900"><RichText render={item.articleTitle} /></span>
                          <span className="mt-3 text-base text-gray-500"><RichText render={item.articleDescription} /></span>
                        </a>

                      }
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        {slice.variation === "featuredArticlesCr" ?
                          <a href={Link.url(item.authorLink)}>
                            <span className="sr-only"><RichText render={item?.articleLink?.data?.authorName} /></span>
                            <img className="h-10 w-10 rounded-full" src={item?.articleLink?.data?.authorImage.url} alt={item?.articleLink?.data?.authorImage.alt} />
                          </a>
                          :
                          <a href={Link.url(item.authorLink)}>
                            <span className="sr-only"><RichText render={item.authorName} /></span>
                            <img className="h-10 w-10 rounded-full" src={item.authorImage.url} alt={item.authorImage.alt} />
                          </a>
                        }
                      </div>
                      {slice.variation === "featuredArticlesCr" ?
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            <a href={Link.url(item?.articleLink?.data?.authorLink)} className="hover:underline">
                              <RichText render={item?.articleLink?.data?.authorName} />
                            </a>
                          </div>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={item?.articleLink?.data?.dateTime}>{new Date(item?.articleLink?.data?.dateTime).toLocaleDateString("fr-FR", dateOptions)}</time>
                            <span aria-hidden="true">&middot;</span>

                            <span>{item?.articleLink?.data?.readingTime} min read</span>
                          </div>
                        </div>
                        :
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            <a href={Link.url(item.authorLink)} className="hover:underline">
                              <RichText render={item.authorName} />
                            </a>
                          </div>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={item.articleDate}>{new Date(item.articleDateTime).toLocaleDateString("fr-FR", dateOptions)}</time>
                            <span aria-hidden="true">&middot;</span>

                            <span>{item.articleReadingTime} min read</span>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      
    </div>
  </section>
)

export default FeaturedBlogPosts