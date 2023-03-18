import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";

type ArticleListProps = {
  title: string;
  articles: Article[];
};

const ArticleList = ({ title, articles }: ArticleListProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="font-bold text-xl">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <li
            key={article.link}
            className="border rounded border-zinc-700 p-2 w-full hover:border-zinc-500 transition-all duration-300 group"
          >
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
