import React, { useEffect, useRef } from "react";
import Reveal from "../Reveal/Reveal";
import { useInView } from "framer-motion";
import useStore from "../../store/globalState";

const SectionWrapper = ({
  children,
  className,
  title,
  id,
  isDisableFadeInAnimation,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id: string;
  isDisableFadeInAnimation?: boolean;
}) => {
  const ref = useRef(null);

  const isScrollInView = useInView(ref);

  const updateActiveSection = useStore(
    (state: any) => state.updateActiveSection
  );

  useEffect(() => {
    if (isScrollInView) {
      updateActiveSection(id);
    }
  }, [isScrollInView]);

  return (
    <section
      data-testid="section-wrapper"
      className={`w-full pr-7 pl-[58px] min-h-[100vh] md:max-w-[900px] md:mx-auto ${className}`}
      id={id}
      ref={ref}
    >
      <Reveal isDisabled={isDisableFadeInAnimation} id={id}>
        <h1
          data-testid="section-title"
          className="text-center text-2xl font-bold mb-4 capitalize dark:text-white"
          ref={ref}
        >
          {title}
        </h1>
        {children}
      </Reveal>
    </section>
  );
};

export default SectionWrapper;
