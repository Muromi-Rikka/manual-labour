import { IconParkOutlineGithub } from "./icons/IconParkOutlineGithub";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { AuroraText } from "./magicui/aurora-text";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function Footer() {
  return (
    <div className="w-full py-10 px-4 bg-gray-300/20 relative mt-24">
      <div className="mb-4 flex flex-col justify-center items-center">
        <div className="mb-4">
          <AnimatedGradientText
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
            className="text-lg font-semibold tracking-tight md:text-4xl"
          >
            诚邀您通过我们的平台发布更多优质高薪职位，为求职者点亮职业发展的新机遇！
          </AnimatedGradientText>
        </div>
        <div>
          <InteractiveHoverButton
            onClick={() => window.open("https://github.com/Muromi-Rikka/manual-labour/issues")}

          >
            <div className="flex flex-row justify-center items-center">
              <IconParkOutlineGithub width={24} height={24} />
              <span className="ml-2">欢迎投稿</span>
            </div>
          </InteractiveHoverButton>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <AnimatedShinyText>@ manual-labour.pages.dev</AnimatedShinyText>
        </div>
        <div>
          <span className="text-gray-500">
            Made with by
          </span>
          <AuroraText className="ml-2 font-bold">Rikka</AuroraText>
        </div>

      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full opacity-35"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  );
}
