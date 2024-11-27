import Layout from "../components/layout";

import "../app/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
