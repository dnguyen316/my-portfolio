import { IconButton } from "@material-tailwind/react";
import useTheme from "../../../hooks/useTheme";
import Icon from "../../Icons/Icons";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import SectionWrapper from "../../Layout/SectionWrapper";

const externalLinks = [
  {
    id: "acbfbdjuir-fwafcacvwa-@#Rgegv",
    title: "github",
    url: "https://github.com/dnguyen316",
    target: "_blank",
    icon: "github",
  },
  {
    id: "facvasvea-veavasvv-bwesvbw-bnrbnerb",
    title: "linkedin",
    url: "https://www.linkedin.com/in/th%C3%A1i-d%C6%B0%C6%A1ng-nguy%E1%BB%85n-l%C3%AA-852028203/",
    target: "_blank",
    icon: "linkedin",
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const [typingTrigger, setTypingTrigger] = useState(false);
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <SectionWrapper
      data-testid="hero"
      className="flex flex-col items-center justify-center h-screen"
      isDisableFadeInAnimation={true}
      id="home"
    >
      <div className="text-center min-h-[130px]">
        <h1
          data-testid="hero-headline"
          className="text-xl mb-2 dark:text-white font-semibold md:text-2xl"
        >
          <TypeAnimation
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[
              "Hi, I am Duong Nguyen",
              (el) => el?.classList.add(CURSOR_CLASS_NAME),
              1000,
              (el) => el?.classList.remove(CURSOR_CLASS_NAME),
              () => setTypingTrigger(true),
            ]}
            speed={50}
          />
        </h1>
        {typingTrigger && (
          <p
            data-testid="hero-sub-headline"
            className="text-base dark:text-white md:text-lg"
          >
            <TypeAnimation sequence={["A Front End Developer", 1500]} />
          </p>
        )}
      </div>

      <ul
        data-testid="hero-icons"
        className="flex items-center justify-center gap-4"
      >
        {externalLinks.map((link) => (
          <li key={link.id}>
            <a target={link.target} href={link.url}>
              <IconButton
                variant="outlined"
                placeholder="github"
                className="rounded-full"
                color={theme === "dark" ? "white" : "black"}
              >
                <Icon
                  type="lucide"
                  name={link.icon as keyof typeof dynamicIconImports}
                />
              </IconButton>
            </a>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default HeroSection;
