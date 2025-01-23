import type { LinkType, NewsDataItem } from "./data.types.ts";
import { LinkTypeRecord, NewsWebsiteList } from "./data.ts";

const searchRecord: Record<LinkType, string> = Object.fromEntries(NewsWebsiteList.map(item => [item.type, item.search])) as Record<LinkType, string>;
export function NewsItem(props: { data: NewsDataItem }) {
  const { data } = props;
  return (
    <div
      className="text-red-500 w-full p-4 bg-white rounded-sm drop-shadow-md flex flex-col justify-center items-center my-4"
    >
      <div className="w-full flex flex-row justify-center items-center">
        <span className="icon-[ph--hash-straight-bold] mx-2"></span>
        <span className="text-lg font-bold truncate">{data.title}</span>
        <span className="icon-[ph--hash-straight-bold] mx-2"></span>
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        {data.link.map(item => (
          <div
            key={item.type}
            className={`mx-1 w-8 h-8 drop-shadow-md rounded-md flex flex-row justify-center items-center ${item.url ? "cursor-pointer bg-red-100" : "opacity-50 cursor-not-allowed bg-gray-200 text-gray-500"}`}
            onClick={() => {
              if (item.url)
                window.open(item.url);
              else
                window.open(searchRecord[item.type] + data.title);
            }}
          >
            <span className={LinkTypeRecord[item.type]}></span>
          </div>
        ))}
      </div>
    </div>
  );
}
