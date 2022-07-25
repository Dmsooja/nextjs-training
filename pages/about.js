import { SliceZone } from "@prismicio/react"
import { Layout } from "../components/Layout"
import { createClient } from '../prismicio'
import { components } from '../slices/index'

const __allComponents = { ...components }

export default function About({ doc, menu, footer }) {
    return (
        <div> 
            <Layout menu={menu} footer={footer}>
                <SliceZone slices={doc.data.slices} components={__allComponents} />
            </Layout>
        </div>
    )
}

// Query data
export async function getStaticProps({ previewData }) {
    const client = createClient(previewData)

    // Query the homepage and render it
    const document = (await client.getSingle('about-page').catch(e => {
        return null
    }));

    // Query the navigation
    const footer = (await client.getSingle("footer").catch(e => {
        return null
    }));

    const menu = (await client.getSingle("menu").catch(e => {
        return null
    }));


    if (!document) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            doc: document,
            menu: menu,
            footer: footer
        }, // will be passed to the page component as props
    }
}