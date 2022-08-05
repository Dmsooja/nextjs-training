import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, menu, footer, altLangs }) => {
  return (
    <div className="text-neutral-700 antialiased">
      <Head>
        <title> Prismic Next.js Training Website </title>
      </Head>
      {menu?.data ?
        <Header menu={menu} altLangs={altLangs} />
        : null
      }
      <main>
        {children}
        </main>
      {footer?.data ?
        <Footer footer={footer} />
        : null
      }
    </div>
  );
};
