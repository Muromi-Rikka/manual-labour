import type { IJsonData, IJsonResponse } from "./data/data.types.ts";
import { useQuery } from "@tanstack/react-query";
import { ofetch } from "ofetch";
import { useMemo } from "react";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { TimeLineContent } from "./components/TimeLineContent.tsx";
import { Timeline } from "./components/ui/timeline.tsx";

function App() {
  const { data: newsData } = useQuery({
    queryFn: () => ofetch<IJsonResponse>("/public/data.json"),
    queryKey: ["news-data"],
    initialData: {
      $schema: "./news.schema.json",
      data: [],
    },
  });
  const timeLineData = useMemo(() => {
    const grouped = Object.groupBy(newsData.data, (item) => {
      return item.date.toString().slice(0, 4);
    }) as Record<string, IJsonData[]>;
    return Object.keys(grouped)
      .map(key => ({
        title: key,
        content: grouped[key].map(item => <TimeLineContent key={item.title} item={item} />),
      }))
      .sort((x, y) => x.title > y.title ? -1 : 1);
  }, [newsData]);

  return (
    <div className="bg-white relative">
      <Hero />
      <Timeline data={timeLineData} />
      <Footer />
    </div>
  );
}

export default App;
