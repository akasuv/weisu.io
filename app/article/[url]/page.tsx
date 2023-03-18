import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const getMarkdown = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch markdown");
  }

  return res.text();
};

const Article = async ({ params }: { params?: { url: string } }) => {
  const markdown = await getMarkdown(decodeURIComponent(params?.url as string));

  return (
    <article className="prose dark:prose-invert mx-auto px-8 py-16 max-x-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
};

export default Article;
