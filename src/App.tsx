import type { IJsonData, NewsDataItem } from "./data.types.ts";
import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { generateLinkList, NewsWebsiteList } from "./data.ts";
import { NewsItem } from "./NewsItem.tsx";
import { WebsiteItem } from "./WebsiteItem.tsx";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();
  const containerStyle = useMemo(() => ({ width: `${width}px`, height: `${height}px` }), [width, height]);

  const [newsData, setNewsData] = useState< NewsDataItem[]>([]);
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
    <div className="p-4 bg-gray-100 overflow-x-hidden overflow-y-auto" style={containerStyle}>
      <div className="w-full p-4 mb-4 bg-white rounded-sm drop-shadow-md text-center">
        <span className="text-red-500 text-3xl font-bold">相关高薪体力活热搜</span>
      </div>
      <div className="w-full p-4 mb-4 bg-white rounded-sm drop-shadow-md">
        <div className="text-center mb-4">
          <span className="text-red-600 text-2xl font-bold">新闻来源</span>
        </div>
        <div className="p-4">
          <p className="text-red-500">
            <span className="font-bold">《郑重声明》</span>
            <span>本站仅为正能量新闻资讯的聚合平台，所有信息均来源于</span>
            {NewsWebsiteList.map((website, index) => (
              <span key={website.label}>
                《
                {website.label}
                》
                {NewsWebsiteList.length - 1 > index ? "、" : "。"}
              </span>
            ))}
            <span>本站所表述的观点不代表本网站的立场。具体内容请点击相关新闻下的按钮以查看详细信息。</span>
          </p>
        </div>
        <div className="h-18 w-full text-center overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2">
          {NewsWebsiteList.map(website => (<WebsiteItem key={website.label} data={website}></WebsiteItem>))}
        </div>
      </div>
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
