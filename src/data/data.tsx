import type { ReactNode } from "react";
import type { IWebsite, LinkType, NewsDataLinkItem } from "./data.types.ts";
import { IconBaidu } from "../components/icons/IconBaidu.tsx";
import { IconsBilibili } from "../components/icons/IconBilibili.tsx";
import { IconNetease } from "../components/icons/IconNetease.tsx";
import { IconSouhu } from "../components/icons/IconSouhu.tsx";
import { IconTencent } from "../components/icons/IconTencent.tsx";
import { IconToutiao } from "../components/icons/IconToutiao.tsx";

/**
 * 生成link
 * @description
 * ```
 * netease  https://www.163.com/dy/article/${id}.html
 * tencent  https://new.qq.com/rain/a/${id}
 * baidu    https://baijiahao.baidu.com/s?id=${id}
 * bilibili https://www.bilibili.com/video/${id}/
 * sohu     https://www.sohu.com/a/${id}
 * toutiao  https://www.toutiao.com/article/${id}
 * ```
 * @param {LinkType} type
 * @param {string} id
 * @returns {NewsDataLinkItem} NewsDataLinkItem
 */
function generateLink(type: LinkType, id: string): NewsDataLinkItem {
  if (id === "") {
    return { type, url: id };
  }
  let url = "";
  switch (type) {
    case "netease":
      url = `https://www.163.com/dy/article/${id}.html`;
      break;
    case "tencent":
      url = `https://new.qq.com/rain/a/${id}`;
      break;
    case "baidu":
      url = `https://baijiahao.baidu.com/s?id=${id}`;
      break;
    case "bilibili":
      url = `https://www.bilibili.com/video/${id}/`;
      break;
    case "sohu":
      url = `https://www.sohu.com/a/${id}`;
      break;
    case "toutiao":
      url = `https://www.toutiao.com/article/${id}`;
  }
  return {
    type,
    url,
  };
}

/**
 * 创建link列表
 *
 * @description
 * ```
 * netease  https://www.163.com/dy/article/${id}.html
 * tencent  https://new.qq.com/rain/a/${id}
 * baidu    https://baijiahao.baidu.com/s?id=${id}
 * bilibili https://www.bilibili.com/video/${id}/
 * sohu     https://www.sohu.com/a/${id}
 * toutiao     https://www.toutiao.com/article/${id}
 * ```
 *
 * @param {Array<[LinkType, string]>} list
 * @returns {NewsDataLinkItem[]} NewsDataLinkItem[]
 */
export function generateLinkList(list: Array<[LinkType, string]>): NewsDataLinkItem[] {
  return list.sort((x, y) => x[0].localeCompare(y[0])).map(item => generateLink(...item));
}

export const LinkTypeRecord: Record<LinkType, ReactNode> = {
  tencent: <IconTencent width={24} height={24} className="text-gray-500" />,
  netease: <IconNetease width={24} height={24} className="text-gray-500" />,
  baidu: <IconBaidu width={24} height={24} className="text-gray-500" />,
  sohu: <IconSouhu width={24} height={24} className="text-gray-500" />,
  bilibili: <IconsBilibili width={24} height={24} className="text-gray-500" />,
  toutiao: <IconToutiao width={24} height={24} className="text-gray-500" />,
};

export const NewsWebsiteList: Array<IWebsite> = [
  { type: "tencent", label: "腾讯新闻", url: "https://news.qq.com/", search: "https://new.qq.com/search?query=" },
  { type: "netease", label: "网易新闻", url: "https://www.163.com/", search: "https://www.163.com/search?keyword=" },
  { type: "baidu", label: "百度百家号", url: "https://baijiahao.baidu.com/", search: "https://www.baidu.com/s?rsv_dl=feed_landingpage_ib&wd=" },
  { type: "sohu", label: "搜狐新闻", url: "https://www.sohu.com", search: "https://search.sohu.com/?keyword=" },
  { type: "bilibili", label: "哔哩哔哩", url: "https://www.bilibili.com", search: "https://search.bilibili.com/all?keyword=" },
  { type: "toutiao", label: "今日头条", url: "https://www.toutiao.com/", search: "https://so.toutiao.com/search?dvpf=pc&source=input&keyword=" },
];
export const NewsWebsiteListImonials = [
  {
    quote: "腾讯新闻作为综合新闻平台，覆盖全球热点、民生资讯等多领域内容，提供实时、全面的新闻报道服务。",
    name: "腾讯新闻",
    title: "综合新闻平台",
  },
  {
    quote: "网易新闻以深度原创报道和多维度分析见长，聚焦社会热点与民生话题，打造有温度的资讯内容生态。",
    name: "网易新闻",
    title: "深度内容平台",
  },
  {
    quote: "百度百家号汇聚海量创作者，涵盖科技、生活、职场等多元领域，为用户提供丰富的原创优质内容。",
    name: "百度百家号",
    title: "创作者内容平台",
  },
  {
    quote: "搜狐新闻深耕资讯领域多年，覆盖新闻、娱乐、体育等全场景内容，致力于为用户提供可信的综合资讯服务。",
    name: "搜狐新闻",
    title: "综合资讯平台",
  },
  {
    quote: "哔哩哔哩作为视频社区平台，通过UP主原创视频呈现体力劳动的真实场景，提供直观的岗位细节与工作日常。",
    name: "哔哩哔哩",
    title: "视频资讯社区",
  },
  {
    quote: "今日头条基于智能推荐技术，精准推送体力劳动相关热点资讯，帮助用户快速获取行业动态与岗位信息。",
    name: "今日头条",
    title: "个性化推荐平台",
  },
];
