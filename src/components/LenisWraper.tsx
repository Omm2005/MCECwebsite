'use client'

import React, { useRef } from 'react'
import ReactLenis from "lenis/react";
import { GoArrowDownRight, GoArrowUpLeft, GoArrowUpRight } from 'react-icons/go';
import { TimelineDemo } from './TimelineSection';
import { RevealLinks } from './FooterLinks';
import { Button } from './ui/button';
import { nextThursday, format } from 'date-fns'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MdLocationPin } from "react-icons/md";
import What from './What';
import { Team } from './Team';

const LenisWraper = () => {

  const nextMetting = format(nextThursday(new Date()), 'MMM dd')
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const invertedOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const section2Ref = useRef(null);
  const isSection2InView = useInView(section2Ref)

  return (
    <ReactLenis
    root
    options={{
      // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
      lerp: 0.1,
      // infinite: true,
      // syncTouch: true,
    }}
    className='flex justify-center items-center gap-5 h-full w-full'
  >


<motion.section className="flex justify-between items-start gap-4 h-screen flex-col w-full py-10 sticky top-0 md:px-10 px-5 bg-foreground text-background"
        style={{
          position: isSection2InView ? 'sticky' : 'unset',
        }}
>
  <div />
  <div>

    <div>
      <motion.h1 className="text-7xl sm:text-[10rem] md:text-[13rem] lg:text-[17rem] font-semibold" 
      style={{ 
        opacity: invertedOpacity,
        y: y
      }}
      >
        MCEC *
      </motion.h1>
      </div>
      <motion.div className='flex flex-col gap-4 w-full' 
            style={{ 
              opacity: invertedOpacity,
              y: y
            }}
      >
      <GoArrowDownRight className="text-4xl text-muted" />
      <p className='--font-geist-sans text-sm sm:text-lg md:text-xl md:w-1/2 text-muted-foreground px-5' >
        A place where builder feels like home. We are group of builder who design, build and compete for Vex Robotics Tournament.
      </p>
      <Link href='https://discord.gg/vWzxV2JV7X' target='_blank' >
      <Button variant={'secondary'} size={'default'} className='w-1/4 rounded-full mx-5 py-7 text-xl flex gap-3 group bg-background text-foreground hover:bg-muted' >
      Join us
      <GoArrowUpRight className='text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-out' />
      </Button>
      </Link>
      </motion.div>
  </div>
      <motion.div className='flex md:justify-between md:items-end w-full md:flex-row flex-col' 
      style={{
        opacity: invertedOpacity,
        y: y
      }}
      >
        <div>
        <p className='md:text-lg hidden md:flex text-sm font-mono font-thin text-muted-foreground' > 
          Location:
        </p>
        <p className='md:hidden flex text-sm font-mono font-thin text-muted-foreground' > 
        We are meeting:
        </p>
        <Link className='md:text-7xl text-5xl font-bold flex hover:underline' href={'https://maps.app.goo.gl/yUH7pzWBfyRfXkF18'} > 
          222, <MdLocationPin />
        </Link>
        </div>
        <div>
        <p className='md:text-lg hidden md:flex text-sm font-mono font-thin text-muted-foreground' > 
          We are meeting:
        </p>
        <p className='md:hidden flex text-sm font-mono font-thin text-muted-foreground' > 
        at
        </p>
        <h3 className='md:text-7xl text-5xl font-bold' > 
          {nextMetting}
        </h3>
        </div>
      </motion.div>
</motion.section>

<motion.section className='sticky h-fit w-screen rounded-3xl bg-background py-10 md:px-8 px-4' 
      style={{ y }}
      ref={section2Ref}
>
  <What />
 
  <div className="py-20 flex flex-col gap-10 h-auto relative" >
      <TimelineDemo />
  </div>

  <div className="py-20 flex flex-col gap-10 h-auto relative" >
  <div className='h-auto flex md:justify-between justify-center items-center group'>

  <GoArrowDownRight className='text-5xl md:text-8xl hidden md:flex group-hover:translate-x-1 group-hover:translate-y-1 transition-all ease-out' />
    <div>
        <h1 className='text-6xl h-20 sm:text-[4rem] md:text-[5rem] lg:text-[8rem] font-semibold text-muted-foreground/80'>
          Meet our team
        </h1>
    </div>
      </div>
      <Team />
  </div>

</motion.section>
<motion.section className=' bg-white w-full h-screen p-10 z-50 flex justify-center items-center'>
  <div className='h-full rounded-3xl bg-background w-full flex justify-center items-center text-center flex-col gap-5' >
    <p className='text-muted-foreground' >
      (Want to feel reality?)
    </p>
  <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl md:w-1/2 font-semibold px-5 md:px-0 --font-geist-mono text-foreground/90' >
    LET&apos;S MAKE THIS HAPPEN
  </h2>
  <Link href='https://lu.ma/3zsltrus' target='_blank' >
  <Link href='https://discord.gg/vWzxV2JV7X' target='_blank' >
  <Button className='rounded-full mx-5 py-7 text-xl flex gap-3 group bg-foreground hover:bg-foreground/80 text-background' >
      Join us
  <GoArrowUpRight className='text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-out' />
  </Button>
      </Link>
  </Link>
  </div>
</motion.section>
<RevealLinks />
      {/* <FlyImage />

      <Marquee />
        <TimelineDemo />
        <RevealLinks /> */}
    </ReactLenis>
  )
}

export default LenisWraper