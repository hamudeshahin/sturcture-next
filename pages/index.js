import Head from "next/head";

Home.layout = "main";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Habbal</title>
        <meta name="description" content="Habbal Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Home</h2>
    </div>
  );
}
