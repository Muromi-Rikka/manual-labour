import type { ReactNode } from "react";
import type { IWebsite, LinkType, NewsDataLinkItem } from "./data.types.ts";
import { IconBaidu } from "../components/icons/IconBaidu.tsx";
import { IconsBilibili } from "../components/icons/IconBilibili.tsx";
import { IconNetease } from "../components/icons/IconNetease.tsx";
import { IconSouhu } from "../components/icons/IconSouhu.tsx";
import { IconTencent } from "../components/icons/IconTencent.tsx";
import { IconToutiao } from "../components/icons/IconToutiao.tsx";

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
  return list.toSorted((x, y) => x[0].localeCompare(y[0])).map(item => generateLink(...item));
}

/**
 * 生成link
 *
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
    case "baidu": {
      url = `https://baijiahao.baidu.com/s?id=${id}`;
      break;
    }
    case "bilibili": {
      url = `https://www.bilibili.com/video/${id}/`;
      break;
    }
    case "netease": {
      url = `https://www.163.com/dy/article/${id}.html`;
      break;
    }
    case "sohu": {
      url = `https://www.sohu.com/a/${id}`;
      break;
    }
    case "tencent": {
      url = `https://new.qq.com/rain/a/${id}`;
      break;
    }
    case "toutiao": {
      url = `https://www.toutiao.com/article/${id}`;
    }
  }
  return {
    type,
    url,
  };
}

export const LinkTypeRecord: Record<LinkType, ReactNode> = {
  baidu: <IconBaidu className="text-gray-500" height={24} width={24} />,
  bilibili: <IconsBilibili className="text-gray-500" height={24} width={24} />,
  netease: <IconNetease className="text-gray-500" height={24} width={24} />,
  sohu: <IconSouhu className="text-gray-500" height={24} width={24} />,
  tencent: <IconTencent className="text-gray-500" height={24} width={24} />,
  toutiao: <IconToutiao className="text-gray-500" height={24} width={24} />,
};

export const NewsWebsiteList: Array<IWebsite> = [
  { label: "腾讯新闻", search: "https://new.qq.com/search?query=", type: "tencent", url: "https://news.qq.com/" },
  { label: "网易新闻", search: "https://www.163.com/search?keyword=", type: "netease", url: "https://www.163.com/" },
  { label: "百度百家号", search: "https://www.baidu.com/s?rsv_dl=feed_landingpage_ib&wd=", type: "baidu", url: "https://baijiahao.baidu.com/" },
  { label: "搜狐新闻", search: "https://search.sohu.com/?keyword=", type: "sohu", url: "https://www.sohu.com" },
  { label: "哔哩哔哩", search: "https://search.bilibili.com/all?keyword=", type: "bilibili", url: "https://www.bilibili.com" },
  { label: "今日头条", search: "https://so.toutiao.com/search?dvpf=pc&source=input&keyword=", type: "toutiao", url: "https://www.toutiao.com/" },
];
export const NewsWebsiteListImonials = [
  {
    name: "腾讯新闻",
    quote: "腾讯新闻作为综合新闻平台，覆盖全球热点、民生资讯等多领域内容，提供实时、全面的新闻报道服务。",
    title: "综合新闻平台",
  },
  {
    name: "网易新闻",
    quote: "网易新闻以深度原创报道和多维度分析见长，聚焦社会热点与民生话题，打造有温度的资讯内容生态。",
    title: "深度内容平台",
  },
  {
    name: "百度百家号",
    quote: "百度百家号汇聚海量创作者，涵盖科技、生活、职场等多元领域，为用户提供丰富的原创优质内容。",
    title: "创作者内容平台",
  },
  {
    name: "搜狐新闻",
    quote: "搜狐新闻深耕资讯领域多年，覆盖新闻、娱乐、体育等全场景内容，致力于为用户提供可信的综合资讯服务。",
    title: "综合资讯平台",
  },
  {
    name: "哔哩哔哩",
    quote: "哔哩哔哩作为视频社区平台，通过UP主原创视频呈现体力劳动的真实场景，提供直观的岗位细节与工作日常。",
    title: "视频资讯社区",
  },
  {
    name: "今日头条",
    quote: "今日头条基于智能推荐技术，精准推送体力劳动相关热点资讯，帮助用户快速获取行业动态与岗位信息。",
    title: "个性化推荐平台",
  },
];
