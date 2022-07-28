import Link from 'next/link';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import { SliceZone } from "@prismicio/react"
import { Layout } from "../components/Layout"
import { createClient } from '../prismicio'
import { components } from '../slices/index'

const __allComponents = { ...components }


export default function Blog({ doc, articles, menu, footer }) {
    return (
        <div>
            <Layout menu={menu} footer={footer}>
            <ul className="grid grid-cols-1 gap-16">
                {articles.map((article) => (
                    <li key={article.id}>
                        {article.title}
                    </li>
                ))}
            </ul>
                <SliceZone slices={doc.data.slices} components={__allComponents} />
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

    const menu = (await client.getSingle("menu").catch(e => {
        return null
    }));

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