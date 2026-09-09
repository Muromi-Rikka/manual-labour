import { useQuery } from "@tanstack/react-query";
import { ofetch } from "ofetch";
import { useMemo } from "react";
import type { IJsonData, IJsonResponse } from "./data/data.types.ts";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { TimeLineContent } from "./components/TimeLineContent.tsx";
import { Timeline } from "./components/ui/timeline.tsx";

function App() {
  const { data: newsData } = useQuery({
    initialData: {
      $schema: "./news.schema.json",
      data: [],
    },
    queryFn: () => ofetch<IJsonResponse>("/public/data.json"),
    queryKey: ["news-data"],
  });
  const timeLineData = useMemo(() => {
    const grouped = Object.groupBy(newsData.data, (item) => {
      return item.date.toString().slice(0, 4);
    }) as Record<string, IJsonData[]>;
    return Object.entries(grouped)
      .map(([key, value]) => ({
        content: value.map(item => <TimeLineContent item={item} key={item.title} />),
        title: key === "9999" ? "遥遥领先" : key,
      }))
      .toSorted((x, y) => x.title.localeCompare(y.title));
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
