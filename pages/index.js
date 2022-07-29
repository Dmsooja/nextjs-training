import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { menuGraphQuery } from "../queries";

// Menu graphQuery

const __allComponents = { ...components }


export default function Home({ doc, menu, footer }) {
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

  // Exemple querying playground page
  // const document = (await client.getSingle('playground-page').catch(e => {
  //   return null
  // }));
  // if (!document) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // Query the homepage and render it
  const document = (await client.getSingle('homepage').catch(e => {
    return null
  }));

  // Query the navigation
  const footer = (await client.getSingle("footer").catch(e => {
    return null
  }));

  const menu = (await client.getSingle(
    "menu", 
    // {'graphQuery': menuGraphQuery}
    ).catch(e => {
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