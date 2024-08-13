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
    ]),
    date: 202401,
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
    date: 202401,
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
    date: 202311,
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
    date: 202401,
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
    date: 202309,
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
    date: 202401,
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
    date: 202309,
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
    date: 202312,
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
    date: 202307,
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
    date: 202308,
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
    date: 202305,
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
    date: 202311,
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
    date: 202301,
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
    date: 202308,
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
    date: 202302,
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
    date: 202307,
  },
  {
    title: "中国女孩辞去国企工作北冰洋捕蟹月入13万",
    link: generateLinkList([
      ["tencent", "20240611A01CV700"],
      ["netease", "J4IHF8O505359IL8"],
      ["sohu", "785384969_121124414"],
      ["bilibili", ""],
      ["baidu", "1801564758694246914"],
    ]),
    date: 202406,
  },
  {
    title: "大厂员工离职后卖香蕉月入200万",
    link: generateLinkList([
      ["tencent", "20240530A083AW00"],
      ["netease", "J3ETTBU90550B6IS"],
      ["sohu", "782566024_121434862"],
      ["bilibili", ""],
      ["baidu", "1800480037664947224"],
    ]),
    date: 202405,
  },
  {
    title: "女子在TikTok上卖车三个月入账2000万",
    link: generateLinkList([
      ["tencent", "20240314A0464200"],
      ["netease", "IT88CE09051191D6"],
      ["sohu", "765345316_114822"],
      ["bilibili", ""],
      ["baidu", "1793651485235331414"],
    ]),
    date: 202403,
  },
  {
    title: "妻子力挺丈夫6次创业终逆袭",
    link: generateLinkList([
      ["tencent", "20240306V0390100"],
      ["netease", "ISJC3LR505561GIG"],
      ["sohu", "762213768_426502"],
      ["bilibili", ""],
      ["baidu", "1792746735960032733"],
    ]),
    date: 202403,
  },
  {
    title: "26岁小伙做私厨月入5万,春节订单爆满",
    link: generateLinkList([
      ["tencent", "20240215A01ZLN00"],
      ["netease", "IQR887PK05129BOL"],
      ["sohu", "757720221_121087783"],
      ["bilibili", ""],
      ["baidu", "1790700758841377967"],
    ]),
    date: 202402,
  },
  {
    title: "80后小伙送鲜花月入6万",
    link: generateLinkList([
      ["tencent", "20240213V01VRD00"],
      ["netease", ""],
      ["sohu", "757834246_121117075"],
      ["bilibili", ""],
      ["baidu", "1790748079012915485"],
    ]),
    date: 202402,
  },
  {
    title: "27岁卡车女司机月入3万",
    link: generateLinkList([
      ["tencent", "20240211A059BS00"],
      ["netease", "IQJLHG0T00019B3E"],
      ["sohu", "757491725_121353797"],
      ["bilibili", ""],
      ["baidu", "1790496643701812472"],
    ]),
    date: 202402,
  },
  {
    title: "大二女生卖男士保暖衣月入两万",
    link: generateLinkList([
      ["tencent", "20231222A024Q100"],
      ["netease", "IO3KO93C0514AJD6"],
      ["sohu", "746139604_121455421"],
      ["baidu", "1785903650768139466"],
      ["bilibili", ""],
    ]),
    date: 202312,
  },
  {
    title: "清华女博士毕业做占星师月入3万元",
    link: generateLinkList([
      ["tencent", "20231118A02UCX00"],
      ["netease", "IJGDDO880553CV3H"],
      ["sohu", "736155541_121286594"],
      ["baidu", "1782460854711113164"],
      ["bilibili", ""],
    ]),
    date: 202311,
  },
  {
    title: "羽毛球拍穿线师月入三四万",
    date: 202408,
    link: generateLinkList([
      ["tencent", "20240812A03A2100"],
      ["netease", "J9DGM8G90529SM26"],
      ["sohu", "800198581_121332524"],
      ["baidu", "1807145949324826403"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "临时儿女悄然兴起，不少从业者月入过万",
    date: 202308,
    link: generateLinkList([
      ["tencent", "20230831A00LFS00"],
      ["netease", "IDB44PH40552D7RN"],
      ["sohu", "715996313_121118710"],
      ["baidu", "1775639038299171961"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "00后女大学生做宿舍美甲月入过万",
    date: 202212,
    link: generateLinkList([
      ["tencent", "20221205A08D7W00"],
      ["netease", "HOA8LDKI0550789W"],
      ["sohu", "616065783_120106510"],
      ["baidu", "1751352755427227449"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "北京环球影城跟拍月入3万元",
    date: 202301,
    link: generateLinkList([
      ["tencent", "20230109A075OP00"],
      ["netease", "HL1PJ5RP05536G4N"],
      ["sohu", "602462842_100024718"],
      ["baidu", "1748816922924893535"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "验瓜师3秒挑一个西瓜月入3万",
    date: 202406,
    link: generateLinkList([
      ["tencent", "20240614A099K100"],
      ["netease", "HCLE0T0J0512B07B"],
      ["sohu", "570285508_100124068"],
      ["baidu", "1738859131647449143"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "萌娃网红短视频账号月入15万",
    date: 202112,
    link: generateLinkList([
      ["tencent", "20211227A08SXQ00"],
      ["netease", "GS2AN0T205199UID"],
      ["sohu", "435880377_114988"],
      ["baidu", "1719998289272411730"],
      ["bilibili", ""],
    ]),
  },
  {
    title: "“纯血鸿蒙”要来了，相关岗位月入4万-6万元",
    date: 999999,
    link: generateLinkList([
      ["tencent", "20231113A05R1800"],
      ["netease", "IJE438430519D3V1"],
      ["sohu", "736016608_100023965"],
      ["baidu", "1782422351116103850"],
      ["bilibili", ""],
    ]),
  },
].sort((x, y) => y.date - x.date);
/**
 {
 title: "",
 date: 0,
 link: generateLinkList([
 ["tencent", ""],
 ["netease", ""],
 ["sohu", ""],
 ["baidu", ""],
 ["bilibili", ""],
 ]),
 },
 */
