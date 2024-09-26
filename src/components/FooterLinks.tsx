import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="place-content-start px-20 py-20 text-foreground w-full bg-foreground justify-between flex md:flex-row flex-col md:items-center items-start">
      <div>

      <span
        className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-xl md:text-2xl lg:text-4xl mb-5 text-background"
        style={{
          lineHeight: 0.75,
        }}
        >
        Links
      </span>
      <FlipLink href="https://linktr.ee/mc_ec">LinkTree</FlipLink>
      <FlipLink href="mailto:moorparkcollegeengineeringclub@gmail.com">Mail</FlipLink>
      <FlipLink href="https://discord.gg/vWzxV2JV7X">Discord</FlipLink>
      <FlipLink href="https://www.tiktok.com/@mcec_official">TikTok</FlipLink>
      <FlipLink href="https://www.instagram.com/mcec.official/">Instagram</FlipLink>
        </div>
        <h2 className="text-black text-xl sm:text-4xl md:text-6xl lg:text-9xl md:flex hidden">
          MCEC
        </h2>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative mb-2 block overflow-hidden whitespace-nowrap text-lg  uppercase sm:text-lg md:text-xl lg:text-3xl text-black"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
