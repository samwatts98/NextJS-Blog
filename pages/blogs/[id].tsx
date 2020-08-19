import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { blogPathProvider, blogDataProvider } from 'lib/blogs';
import { Layout } from 'components/layout';

export default function Blog(blogData: BlogData): React.ReactElement {
  return (
    <Layout>
      <h1>{blogData.title}</h1>
      <h3>{blogData.slug}</h3>
      <h3>{blogData.date}</h3>
      <article dangerouslySetInnerHTML={{ __html: blogData.content }}></article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPathProvider();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await blogDataProvider(params?.id as string);

  return {
    props: {
      ...blogData,
    },
  };
};
