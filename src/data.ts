import type { IWebsite, LinkType, NewsDataItem, NewsDataLinkItem } from "./data.types.ts";

/**
 * 生成link
 * @description
 * ```
 * netease  https://www.163.com/dy/article/${id}.html
 * tencent  https://new.qq.com/rain/a/${id}
 * baidu    https://baijiahao.baidu.com/s?id=${id}
 * bilibili https://www.bilibili.com/video/${id}/
 * sohu     https://www.sohu.com/a/${id}
 * ```
 * @param {LinkType} type
 * @param {string} id
 * @returns {NewsDataLinkItem} NewsDataLinkItem
 */
function generateLink(type: LinkType, id: string): NewsDataLinkItem {
  if (!id) {
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
 * ```
 *
 * @param {Array<[LinkType, string]>} list
 * @returns {NewsDataLinkItem[]} NewsDataLinkItem[]
 */
function generateLinkList(list: Array<[LinkType, string]>): NewsDataLinkItem[] {
  return list.sort((x, y) => x[0].localeCompare(y[0])).map(item => generateLink(...item));
}

export const LinkTypeRecord: Record<LinkType, `icon-[${string}--${string}]`> = {
  tencent: "icon-[simple-icons--tencentqq]",
  netease: "icon-[simple-icons--neteasecloudmusic]",
  baidu: "icon-[simple-icons--baidu]",
  sohu: "icon-[emojione-monotone--fox]",
  bilibili: "icon-[simple-icons--bilibili]",
};

export const NewsWebsiteList: Array<IWebsite> = [
  { type: "tencent", label: "腾讯新闻", url: "https://new.qq.com/" },
  { type: "netease", label: "网易新闻", url: "https://www.163.com/" },
  { type: "baidu", label: "百度百家号", url: "https://baijiahao.baidu.com/" },
  { type: "sohu", label: "搜狐新闻", url: "https://www.sohu.com" },
  { type: "bilibili", label: "哔哩哔哩", url: "https://www.bilibili.com" },
];

export const NewsData: NewsDataItem[] = [
  {
    title: "外卖小哥为还债送外卖3年挣了102万",
    link: generateLinkList([
      ["baidu", "1787979686809133500"],
      ["tencent", "20240113A04G5I00"],
      ["sohu", "751675218_121123710"],
      ["netease", ""],
      ["bilibili", ""],
    ],
    ),
  },
  {
    title: "年轻人入行装修月入4万",
    link: generateLinkList([
      ["tencent", "20240115A05RTG00"],
      ["netease", "IOM8PBJ505563SS0"],
      ["baidu", "1788217538829371016"],
      ["sohu", "752147655_121218495"],
      ["bilibili", ""],
    ]),

  },
  {
    title: "00后男生收破烂年入20万",
    link: generateLinkList([
      ["bilibili", "BV18i4y1i7kh"],
      ["netease", "IOGSHB3S0553K47P"],
      ["baidu", "1788144070305584678"],
      ["sohu", "752140467_100199564"],
      ["tencent", ""],
    ]),
  },
  {
    title: "90后瓦工日薪2000在省会买了房",
    link: generateLinkList([
      ["tencent", "20240115A02NTJ00"],
      ["netease", "IOJF31CP0553K4C6"],
      ["baidu", "1788152381623997430"],
      ["sohu", ""],
      ["bilibili", ""],
    ]),
  },
  {
    title: "00后女孩抡起大锤砸墙月入3万",
    link: generateLinkList([
      ["tencent", "20230922A061DK00"],
      ["netease", "IFSIPCEH0552RUAA"],
      ["baidu", "1778289409027679198"],
      ["bilibili", ""],
      ["sohu", ""],
    ]),
  },
  {
    title: "武汉90后会计转行做家政月入4万",
    link: generateLinkList([
      ["sohu", "751405778_121426544"],
      ["netease", "IO3R48KS0553PD5D"],
      ["baidu", "1787514871041579397"],
      ["bilibili", ""],
      ["tencent", ""],
    ]),
  },
  {
    title: "江苏95后男兽医做家政月入60万",
    link: generateLinkList([
      ["sohu", "724131328_121448078"],
      ["netease", "IFLP9M4O0519DFFO"],
      ["baidu", "1778183516524899044"],
      ["tencent", "20230927A0ATTL00"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "女生大学毕业卖烤猪月入3万",
    link: generateLinkList([
      ["tencent", "20231228V03T2600"],
      ["netease", "IN1TOBTS0553CV3H"],
      ["sohu", "797170929_121985810"],
      ["bilibili", ""],
      ["baidu", ""],
    ]),
  },
  {
    title: "19岁小伙辞职抓知了月入三四万",
    link: generateLinkList([
      ["tencent", "20230720A0400O00"],
      ["netease", ""],
      ["sohu", "705022210_349120"],
      ["bilibili", ""],
      ["baidu", "1771919776608654020"],
    ]),
  },
  {
    title: "我在村里找到了月薪15000的工作",
    link: generateLinkList([
      ["tencent", ""],
      ["netease", ""],
      ["sohu", ""],
      ["bilibili", ""],
      ["baidu", "1773663321265606504"],
    ]),
  },
  {
    title: "辞职后靠摆摊月入五万",
    link: generateLinkList([
      ["tencent", ""],
      ["netease", ""],
      ["sohu", "796484978_121985223"],
      ["bilibili", ""],
      ["baidu", "1765399532372504537"],
    ]),
  },
  {
    title: "35岁女子在香港做泥瓦工月入10万",
    link: generateLinkList([
      ["tencent", "20231107A08BIZ00"],
      ["netease", "IJ0R8N1M0556546Z"],
      ["sohu", "734551631_121287299"],
      ["bilibili", ""],
      ["baidu", "1781882209221384692"],
    ]),
  },
  {
    title: "杀猪女屠夫月入3万买房买奔驰",
    link: generateLinkList([
      ["tencent", "20230121A00XEU00"],
      ["netease", "HSVF94D6055615GO"],
      ["sohu", "633156209_121019331"],
      ["bilibili", ""],
      ["baidu", "1755636289383918290"],
    ]),
  },
  {
    title: "墓地保洁月入8000",
    link: generateLinkList([
      ["tencent", ""],
      ["netease", "HPTN8JJ50553WHJN"],
      ["sohu", "716615780_121260755"],
      ["bilibili", ""],
      ["baidu", "1775746182977996914"],
    ]),
  },
  {
    title: "90后程序员改行卖早餐年入30万",
    link: generateLinkList([
      ["tencent", "20230222A08MK100"],
      ["netease", "HU77S84E05561HFD"],
      ["sohu", "644794267_121019331"],
      ["bilibili", ""],
      ["baidu", "1758587889523957914"],
    ]),
  },
  {
    title: "90后男子国企辞职摆摊收入涨3倍",
    link: generateLinkList([
      ["tencent", ""],
      ["netease", "DBIM2H7D0522N9OS"],
      ["sohu", "400094893_120726317"],
      ["bilibili", ""],
      ["baidu", "1805026406935209101"],
    ]),
  },
];
/**
 link: generateLinkList([
 ["tencent", ""],
 ["netease", ""],
 ["sohu", ""],
 ["bilibili", ""],
 ["baidu", ""],
 ]),
 */
