import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { title, date },
    content,
  } = matter(source);
  const body = marked(content);

  return { title, date, body };
};

export const getSlugs = async () => {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files.filter((file) => file.endsWith(suffix)).map((file) => file.slice(0, -suffix.length));
};

export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
};
