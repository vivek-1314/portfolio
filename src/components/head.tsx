import Head from 'next/head';

export default function SEO() {
  return (
    <Head>
      <title>Vivek Gaindhar | Fullstack Developer & AI Technologist</title>
      <meta
        name="description"
        content="Portfolio of Vivek Gaindhar — a fullstack developer and creative technologist building real-world impact through code, AI, and bold ideas."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Vivek Gaindhar" />

      <meta property="og:title" content="Vivek Gaindhar | Fullstack Developer & AI Technologist" />
      <meta
        property="og:description"
        content="Explore Vivek Gaindhar’s portfolio — merging AI, design, and engineering to create meaningful digital experiences."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-dun-nine-30.vercel.app/" />
      <meta property="og:image" content="https://portfolio-dun-nine-30.vercel.app/og-image.png" />

      <link rel="canonical" href="https://portfolio-dun-nine-30.vercel.app/" />
    </Head>
  );
}
