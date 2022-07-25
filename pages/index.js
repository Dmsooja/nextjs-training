import { SliceZone } from "@prismicio/react"
import { Layout } from "../components/Layout"
import { createClient } from '../prismicio'

import { components as ecommerceComponents } from '../slices/index'

// Menu graphQuery

const __allComponents = { ...ecommerceComponents }

export default function Home({ doc, menu, footer }) {
  return (
    <div>
      {/* <SliceZone slices={doc.data.slices} components={__allComponents} /> */}
      <Layout menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient(previewData)

  //Querying page
  // const document = (await client.getSingle('playground-page').catch(e => {
  //   return null
  // }));
  // if (!document) {
  //   return {
  //     notFound: true,
  //   }
  // }

  const document = (await client.getSingle('homepage').catch(e => {
    return null
  }));
  if (!document) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      doc: document
    }, // will be passed to the page component as props
  }
}