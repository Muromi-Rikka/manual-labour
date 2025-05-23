import type { IJsonData, NewsDataItem } from "./data.types.ts";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AuroraText } from "./components/magicui/aurora-text.tsx";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight.tsx";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards.tsx";
import { generateLinkList, NewsWebsiteList, NewsWebsiteListImonials } from "./data.ts";
import { NewsItem } from "./NewsItem.tsx";

function App() {
  const [newsData, setNewsData] = useState<NewsDataItem[]>([]);
  useEffect(() => {
    fetch("/public/data.json").then(res => res.json()).then((res: { data: IJsonData[] }) => {
      setNewsData(res.data.sort((x, y) => y.date - x.date).map((item) => {
        return {
          title: item.title,
          link: generateLinkList(item.link),
          date: item.date,
        };
      }));
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden overflow-y-auto">
      <HeroHighlight>
        <div className="flex flex-row justify-center items-center mb-6">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl"
          >
            相关
            <AuroraText className="mx-2">高薪体力活</AuroraText>
            热搜
          </motion.h1>
        </div>
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <span className="text-lg">《郑重声明》本站仅为</span>
          <Highlight className="text-lg mx-2">
            正能量新闻资讯
          </Highlight>
          <span className="text-lg">的聚合平台，所有信息均来源于</span>

          {NewsWebsiteList.map((website, index) => (
            <>
              <Highlight className="text-black dark:text-white text-lg" key={website.label}>
                《
                {website.label}
                》
              </Highlight>
              <span className="text-lg">{NewsWebsiteList.length - 1 > index ? "、" : "。"}</span>
            </>
          ))}
          <span className="text-lg">本站所表述的观点不代表本网站的立场。具体内容请点击相关新闻下的按钮以查看详细信息。</span>
        </motion.h2>
      </HeroHighlight>
      <InfiniteMovingCards items={NewsWebsiteListImonials} speed="slow" />

      {
        newsData.map(data => <NewsItem key={data.title} data={data} />)
      }
      <div
        onClick={() => window.open("https://github.com/Muromi-Rikka/manual-labour/issues")}
        className="cursor-pointer w-full p-4 mb-4 bg-white rounded-sm drop-shadow-md flex flex-row justify-center items-center text-gray-500"
      >
        <span className="underline">欢迎投稿</span>
        <span className="icon-[icon-park-outline--github] ml-2"></span>
      </div>
    </div>
  );
}

export default App;
