import type { IWebsite } from "./data.types.ts";
import { LinkTypeRecord } from "./data.ts";

export function WebsiteItem(props: { data: IWebsite }) {
  const { data } = props;
  return (
    <div className="inline-block w-16 h-16 mx-2">
      <div onClick={() => window.open(data.url)} className="w-16 h-16 rounded-md border border-solid border-red-600 select-none cursor-pointer bg-red-500/20 flex flex-col justify-center items-center drop-shadow-sm">
        <div>
          <span className={`${LinkTypeRecord[data.type]} text-2xl text-red-500`}></span>
        </div>
        <div className="text-red-500 text-xs truncate">{data.label}</div>
      </div>
    </div>
  );
}
