import React from 'react';
import Link from 'next/link';
import { blogIdProvider } from 'lib/blogs';
import { haikuIdProvider } from 'lib/haikus';
import { GetStaticProps } from 'next';
export default function Home({ blogs, haikus }: { blogs: string[]; haikus: string[] }): React.ReactElement {
  return (
    <>
      <h1>Hello!</h1>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((id) => (
          <li key={id}>
            <Link href="./blogs/[id]" as={`./blogs/${id}`}>
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Haikus</h2>
      <ul>
        {haikus.map((id) => (
          <li key={id}>
            <Link href="./haikus/[id]" as={`./haikus/${id}`}>
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await blogIdProvider();
  const haikus = await haikuIdProvider();
  return {
    props: {
      blogs,
      haikus,
    },
  };
};
