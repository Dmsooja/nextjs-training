import { SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from '../prismicio'
import * as prismicH from '@prismicio/helpers';
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ menu, slices }) => {
  return (
    <Layout menu={menu}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export default Page;


/*
  Return a document/page content dynamically based on the URL
*/

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  // Query the page
  const page = await client.getByUID("page", params.uid);

  // Query the navigation
  const footer = await client.getSingle("footer");
  const menu = await client.getSingle("menu");


  return {
    props: {
      menu,
      footer,
      slices: page.data.slices,
    },
  };
}

// Paths
/*
  The Link Resolver runs client-side,
  which means that it can only work with the data received from the API.
  Use the Link Resolver when you want to build shorter URLs, like me.com/post/hello-world or me.com/about-me.
*/

// determines all of the routes for statically-generated dynamic pages
export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('page')
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  }
}