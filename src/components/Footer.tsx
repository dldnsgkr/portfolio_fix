import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer
      className="bg-background dark:bg-background-dark
        text-primary dark:text-primary-dark
        transition-colors duration-500 ease-in-out"
    >
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="text-4xl pc:text-5xl font-bold mb-4 tracking-tight"
        >
          감사합니다 🙏
        </motion.p>

        <motion.p
          variants={item}
          className="text-muted dark:text-muted-dark text-lg mb-10 max-w-md"
        >
          포트폴리오를 끝까지 봐주셔서 감사합니다.
          <br />
          언제든지 연락주시면 반갑게 소통하겠습니다.
        </motion.p>

        <motion.div
          variants={item}
          className="flex gap-6 mb-12"
        >
          <a
            href="mailto:dldnsgkr3326@gmail.com"
            className="px-6 py-3 rounded-full border border-accent dark:border-accent-dark
              text-accent dark:text-accent-dark font-medium
              hover:bg-accent dark:hover:bg-accent-dark
              hover:text-white dark:hover:text-background-dark
              transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://github.com/dldnsgkr"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-accent dark:border-accent-dark
              text-accent dark:text-accent-dark font-medium
              hover:bg-accent dark:hover:bg-accent-dark
              hover:text-white dark:hover:text-background-dark
              transition-all duration-300"
          >
            GitHub
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm text-muted dark:text-muted-dark"
        >
          © 2025 Lee Un Hak. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
