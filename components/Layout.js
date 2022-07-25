import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, menu, footer }) => {
  return (
    <div className="text-neutral-700 antialiased">
      <Head>
        <title> Prismic Next.js Training Website </title>
      </Head>
      {menu?.data ?
        <Header menu={menu} />
        : null
      }
      <main>
        <h1>Layout</h1>
        {children}
        </main>
      {footer?.data ?
        <Footer footer={footer} />
        : null
      }
    </div>
  );
};
