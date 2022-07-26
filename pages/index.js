import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { menuGraphQuery, blogArticlesGraphQuery } from "../queries";


// Menu graphQuery


const __allComponents = { ...components }


export default function Home({ doc, menu, footer }) {
  return (
    <div>
      <Layout menu={menu} footer={footer} altLangs={doc.alternate_languages}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

// Query data
export async function getStaticProps({ previewData, locale }) {
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
  // const document = (await client.getSingle('homepage').catch(e => {
  //   return null;
  // }));

  const document = (await client.getSingle('homepage', { graphQuery: blogArticlesGraphQuery, lang: locale }).catch(e => {
    return null;
  }));

  // Query the navigation
  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

  const menu = (await client.getSingle("menu", { lang: locale }).catch(e => {
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
      footer: footer,
      // locale: locale,
    }, // will be passed to the page component as props
  }
}