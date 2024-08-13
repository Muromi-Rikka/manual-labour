export interface NewsDataItem {
  title: string;
  link: NewsDataLinkItem[];
  date: number;
}

export interface NewsDataLinkItem {
  type: LinkType;
  url: string;
}

export type LinkType = "tencent" | "netease" | "baidu" | "sohu" | "bilibili";

export interface IWebsite {
  type: LinkType;
  url: string;
  label: string;

}
