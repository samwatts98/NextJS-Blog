import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { haikuDataProvider, haikuPathProvider } from 'lib/haikus';
import { Layout } from 'components/layout';
export default function Haiku(haikuData: HaikuData): React.ReactElement {
  return (
    <Layout>
      <section>
        <h1>{`${haikuData.img_word} - ${haikuData.num_words}`}</h1>
        <article dangerouslySetInnerHTML={{ __html: haikuData.haiku }}></article>
        <img width="40%" alt={haikuData.img_word} src={haikuData.img_url} />
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = haikuPathProvider();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await haikuDataProvider(params?.id as string);

  return {
    props: {
      ...blogData,
    },
  };
};
