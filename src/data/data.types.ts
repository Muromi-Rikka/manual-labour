export interface NewsDataItem {
  title: string;
  link: NewsDataLinkItem[];
  date: number;
}

export interface NewsDataLinkItem {
  type: LinkType;
  url: string;
}

export type LinkType = "tencent" | "netease" | "baidu" | "sohu" | "bilibili" | "toutiao";

export interface IWebsite {
  type: LinkType;
  url: string;
  label: string;
  search: string;
}

export interface IJsonData {
  title: string;
  link: Array<[LinkType, string]>;
  date: number;
}
export interface IJsonResponse {
  $schema: "./news.schema.json";
  data: IJsonData[];
}
