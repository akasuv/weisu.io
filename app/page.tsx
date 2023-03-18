import { createClient } from "@supabase/supabase-js";
import ArticleList from "@/components/ArticleList";
import { Article } from "@/types";
import groupBy from "lodash/groupby";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SECRET_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const Introudction = () => (
  <div className="flex flex-col items-center gap-y-2 p-4">
    <h2 className="text-xl font-black">Explore the web.</h2>
  </div>
);

export default async function Home() {
  let { data, error } = await supabase.from("articles").select("*");

  if (error) {
    return <div>error</div>;
  }

  const articleList = groupBy(data, (article) => article.category);

  return (
    <main>
      <div>
        <Introudction />
      </div>
      <div className="pt-8 flex flex-col gap-y-8">
        {Object.keys(articleList).map((section) => (
          <ArticleList
            key={section}
            title={section}
            articles={articleList[section] as Article[]}
          />
        ))}
      </div>
    </main>
  );
}
