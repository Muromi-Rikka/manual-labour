import "./App.css";
import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";
import { NewsData, NewsWebsiteList } from "./data.ts";
import { NewsItem } from "./NewsItem.tsx";
import { WebsiteItem } from "./WebsiteItem.tsx";

function App() {
  const { width, height } = useWindowSize();
  const containerStyle = useMemo(() => ({ width: `${width}px`, height: `${height}px` }), [width, height]);
  return (
    <div className="p-4 bg-gray-100 overflow-x-hidden overflow-y-auto" style={containerStyle}>
      <div className="w-full p-4 mb-4 bg-white rounded drop-shadow-md text-center">
        <span className="text-red-500 text-3xl font-bold">相关高薪体力活热搜</span>
      </div>
      <div className="w-full p-4 mb-4 bg-white rounded drop-shadow-md">
        <div className="text-center mb-4">
          <span className="text-red-600 text-2xl font-bold">新闻来源</span>
        </div>
        <div className="h-18 w-full overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2">
          {NewsWebsiteList.map(website => (<WebsiteItem data={website}></WebsiteItem>))}
        </div>
      </div>
      {
        NewsData.map(data => <NewsItem key={data.title} data={data} />)
      }
      <div onClick={() => window.open("https://github.com/Muromi-Rikka/manual-labour/issues")} className="w-full p-4 mb-4 bg-white rounded drop-shadow-md flex flex-row justify-center items-center text-gray-500">
        <span className="underline">欢迎投稿</span>
        <span className="icon-[icon-park-outline--github] ml-2"></span>
      </div>
    </div>
  );
}

export default App;
