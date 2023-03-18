import Link from "next/link";

type ArticleCardProps = {
  link: string;
  title: string;
  created_at: string;
};

const ArticleCard = ({ link, title, created_at }: ArticleCardProps) => {
  return (
    <Link href={`/article/${encodeURIComponent(link)}`}>
      <div className="flex flex-col gap-2">
        <p className="group-hover:underline">{title}</p>
        <p className="text-sm text-zinc-600">{created_at.split("T")[0]}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
