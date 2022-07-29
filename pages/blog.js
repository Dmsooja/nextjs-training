import Link from 'next/link';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import { SliceZone } from "@prismicio/react"
import { Layout } from "../components/Layout"
import { createClient } from '../prismicio'
import { components } from '../slices/index'

import Head from "next/head";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { menuGraphQuery } from '../queries';

const __allComponents = { ...components }

const Article = ({ article }) => {

    // const date = prismicH.asDate(
    //     article.data.date || article.first_publication_date
    // );

    return (
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
            <div className="sm:flex">
                <PrismicLink document={article} tabIndex="-1">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 relative w-40 h-40">
                        {prismicH.isFilled.image(article.data.featuredImage) && (
                            <PrismicNextImage
                                field={article.data.featuredImage}
                                layout="fill"
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div>
                        <div className="text-lg font-bold"><PrismicText field={article.data.title} /></div>
                        <p className="mt-1">
                            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                            quidem ipsam quia iusto.
                        </p>
                    </div>
                </PrismicLink>
            </div>
            {/* <PrismicLink document={article} tabIndex="-1">
                <div className="aspect-w-3 aspect-h-3 relative bg-gray-100">
                    {prismicH.isFilled.image(article.data.featuredImage) && (
                        <PrismicNextImage
                            field={article.data.featuredImage}
                            layout="fill"
                            className="object-cover"
                        />
                    )}
                </div>
                <div className="grid grid-cols-1 gap-3 md:col-span-2">
                    <div>
                        <PrismicText field={article.data.title} />
                    </div>
                    
                </div>
            </PrismicLink> */}
        </li>
    );
};

export default function Blog({ doc, articles, menu, footer }) {
    return (
        <div>
            <Layout menu={menu} footer={footer}>
                <SliceZone slices={doc.data.slices} components={__allComponents} />
                <div className='px-4 py-8 md:py-10 md:px-6 lg:py-12 max-w-6xl'>
                    <ul className="grid grid-cols-1 gap-16">
                        {articles.map((article) => (
                            <Article key={article.id} article={article} />
                        ))}
                    </ul>
                </div>
            </Layout>
        </div>
    )
}

// Query data
export async function getStaticProps({ previewData }) {
    const client = createClient(previewData)

    // Query the homepage and render it
    const document = (await client.getSingle('blog').catch(e => {
        return null
    }));

    // Query the navigation
    const footer = (await client.getSingle("footer").catch(e => {
        return null
    }));

    debugger
    const menu = (
        await client.getSingle("menu", {'graphQuery': menuGraphQuery}
        )
    // .catch(e => {return null})
    .catch(e => {console.log(e)})
    );

    // Query the articles
    const articles = await client.getAllByType("blog-article").catch(e => {
        return null
    });

    if (!document) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            doc: document,
            menu: menu,
            footer: footer,
            articles: articles
        },
    }
}