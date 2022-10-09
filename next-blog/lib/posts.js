import { readFile } from "fs/promises";
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
