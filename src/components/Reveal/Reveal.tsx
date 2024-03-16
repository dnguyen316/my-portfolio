import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
// import useStore from "../../store/globalState";

interface RevealProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  id: string;
}

const Reveal = ({ children, isDisabled }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={isDisabled ? false : "hidden"}
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
