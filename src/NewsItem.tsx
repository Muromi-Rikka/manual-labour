import type { NewsDataItem } from "./data.types.ts";
import { LinkTypeRecord } from "./data.ts";

export function NewsItem(props: { data: NewsDataItem }) {
  const { data } = props;
  return (
    <div
      className="text-red-500 w-full p-4 bg-white rounded drop-shadow-md flex flex-col justify-center items-center my-4"
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
            className={`mx-1 w-8 cursor-pointer h-8 bg-red-100 drop-shadow-md rounded-md flex flex-row justify-center items-center ${item.url ? "" : "opacity-50 cursor-not-allowed"}`}
            onClick={() => {
              if (item.url)
                window.open(item.url);
            }}
          >
            <span className={LinkTypeRecord[item.type]}></span>
          </div>
        ))}
      </div>
    </div>
  );
}
