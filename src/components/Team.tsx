import React from 'react'
import Faculty_Advisor from '@/../public/Faculty_Advisor.png'
import Co_Advisor from '@/../public/Co_Advisor.png'
import Co_President1 from '@/../public/Co_President1.png'
import Co_President2 from '@/../public/Co_President2.png'
import Treasurer from '@/../public/Treasurer.png'
import Secretary from '@/../public/Secretary.png'
import Strategist from '@/../public/Strategist.png'
import Marquee from './ui/Marquee'
import { cn } from '@/lib/utils'

type Props = {}

  const members = [
    {
      name: 'Dr. Relle',
      role: 'Faculty Advisor',
      image: Faculty_Advisor.src
    },
    {
      name: 'Micah Tischler',
      role: 'Co-Advisor',
      image: Co_Advisor.src
    },
    {
      name: 'Johnny Cordon',
      role: 'Co-President',
      image: Co_President1.src
    },
    {
      name: 'Kevin Ambat',
      role: 'Co-President',
      image: Co_President2.src
    },
    {
      name: 'Jalees Malik',
      role: 'Treasurer',
      image: Treasurer.src
    },
    {
      name: 'Chelsea Darrow',
      role: 'Secretary',
      image: Secretary.src
    },
    {
      name: 'Suren Simonyan',
      role: 'Strategist',
      image: Strategist.src
    }
  ]

const ReviewCard = ({
  image,
  name,
  role
}: {
  image: string;
  name: string;
  role: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl",
        // dark styles
        "",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-lg w-48 h-60 object-cover grayscale hover:grayscale-0" alt="" src={image} />
        <div className="flex flex-col justify-center items-center">
          <figcaption className="text-lg font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/40">{role}</p>
        </div>
      </div>
    </figure>
  );
};
 
export function Team() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {members.map((data) => (
          <ReviewCard key={data.role} {...data} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}