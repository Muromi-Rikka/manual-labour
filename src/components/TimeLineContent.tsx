import { useMemo } from "react";
import type { IJsonData, LinkType } from "@/data";
import { generateLinkList, LinkTypeRecord, NewsWebsiteList } from "@/data";
import { GlowingEffect } from "./ui/glowing-effect";

const searchRecord: Record<LinkType, string> = Object.fromEntries(NewsWebsiteList.map(item => [item.type, item.search])) as Record<LinkType, string>;

interface TimeLineContentProperties {
  item: IJsonData;
}
export function TimeLineContent(properties: TimeLineContentProperties) {
  const { item } = properties;
  const linkList = useMemo(() => generateLinkList(item.link), [item]);
  return (
    <div className="bg-gray-200/30 rounded-md p-4 my-5 relative select-none" key={item.title}>
      <GlowingEffect
        disabled={false}
        glow={true}
        inactiveZone={0.01}
        proximity={64}
        spread={40}
      />
      <div className="mb-4 text-gray-900 text-lg">
        <h1>{item.title}</h1>
      </div>
      <div className="flex flex-row justify-start items-center">
        {
          linkList.map(({ type, url }) => (
            <div
              className="border border-solid border-gray-400 p-1 rounded mr-2 cursor-pointer"
              key={type}
              onClick={() => {
                if (url)
                  window.open(url);
                else
                  window.open(searchRecord[type] + item.title);
              }}
            >
              {LinkTypeRecord[type]}
            </div>
          ))
        }
      </div>
    </div>
  );
}
