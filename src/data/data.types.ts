export interface IJsonData {
  date: number;
  link: Array<[LinkType, string]>;
  title: string;
}

export interface IJsonResponse {
  $schema: "./news.schema.json";
  data: IJsonData[];
}

export interface IWebsite {
  label: string;
  search: string;
  type: LinkType;
  url: string;
}

export type LinkType = "baidu" | "bilibili" | "netease" | "sohu" | "tencent" | "toutiao";

export interface NewsDataItem {
  date: number;
  link: NewsDataLinkItem[];
  title: string;
}
export interface NewsDataLinkItem {
  type: LinkType;
  url: string;
}
