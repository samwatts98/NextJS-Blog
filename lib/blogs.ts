import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import generateModule from 'lib/sectionGenerator';

const blogTransformer = async (id: string, fileContent: string): Promise<BlogData> => {
  const fileParsed = matter(fileContent);
  const contentTransformed = (await remark().use(html).process(fileParsed.content)).toString();
  return {
    id,
    content: contentTransformed,
    ...(fileParsed.data as { title: string; slug: string; date: string }),
  };
};

const [blogIdProvider, blogPathProvider, blogDataProvider] = generateModule('blogs', '.md', blogTransformer);
export { blogIdProvider, blogDataProvider, blogPathProvider };
