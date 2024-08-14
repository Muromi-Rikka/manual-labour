import type { IWebsite, LinkType, NewsDataLinkItem } from "./data.types.ts";

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

export const LinkTypeRecord: Record<LinkType, `icon-[${string}--${string}]`> = {
  tencent: "icon-[simple-icons--tencentqq]",
  netease: "icon-[simple-icons--neteasecloudmusic]",
  baidu: "icon-[simple-icons--baidu]",
  sohu: "icon-[emojione-monotone--fox]",
  bilibili: "icon-[simple-icons--bilibili]",
  toutiao: "icon-[icon-park-outline--jinritoutiao]",
};

export const NewsWebsiteList: Array<IWebsite> = [
  { type: "tencent", label: "腾讯新闻", url: "https://news.qq.com/", search: "https://new.qq.com/search?query=" },
  { type: "netease", label: "网易新闻", url: "https://www.163.com/", search: "https://www.163.com/search?keyword=" },
  { type: "baidu", label: "百度百家号", url: "https://baijiahao.baidu.com/", search: "https://www.baidu.com/s?rsv_dl=feed_landingpage_ib&wd=" },
  { type: "sohu", label: "搜狐新闻", url: "https://www.sohu.com", search: "https://search.sohu.com/?keyword=" },
  { type: "bilibili", label: "哔哩哔哩", url: "https://www.bilibili.com", search: "https://search.bilibili.com/all?keyword=" },
  { type: "toutiao", label: "今日头条", url: "https://www.toutiao.com/", search: "https://so.toutiao.com/search?dvpf=pc&source=input&keyword=" },
];
