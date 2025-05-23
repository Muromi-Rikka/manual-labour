import { motion } from "motion/react";
import { NewsWebsiteList, NewsWebsiteListImonials } from "@/data/data";
import { AuroraText } from "./magicui/aurora-text";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Hero() {
  return (
    <>
      <HeroHighlight>
        <div className="flex flex-row justify-center items-center mb-6">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl"
          >
            相关
            <AuroraText className="mx-2">高薪体力活</AuroraText>
            热搜
          </motion.h1>
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <span className="text-lg">《郑重声明》本站仅为</span>
          <Highlight className="text-lg mx-2">
            正能量新闻资讯
          </Highlight>
          <span className="text-lg">的聚合平台，所有信息均来源于</span>

          {NewsWebsiteList.map((website, index) => (
            <span key={website.label}>
              <Highlight className="text-black dark:text-white text-lg">
                《
                {website.label}
                》
              </Highlight>
              <span className="text-lg">{NewsWebsiteList.length - 1 > index ? "、" : "。"}</span>
            </span>
          ))}
          <span className="text-lg">本站所表述的观点不代表本网站的立场。具体内容请点击相关新闻下的按钮以查看详细信息。</span>
        </motion.h1>
      </HeroHighlight>
      <InfiniteMovingCards items={NewsWebsiteListImonials} speed="slow" className="mx-auto" />
    </>
  );
}
