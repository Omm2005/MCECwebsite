import React from "react";
import { Timeline } from "./ui/Timeline";
import VexWorlds from '@/../public/VexWorlds.jpg'
import Club_2021 from '@/../public/Club_2021.png'

export function TimelineDemo() {
  const data = [
    {
      title: '2015',
      content: (
        <div className="shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-2xl md:text-4xl font-bold text-indigo-600 mb-3">9th Place at Worlds</h3>
          <p className="text-foreground/90 text-lg md:text-2xl mb-4">Our team made its mark on the global stage:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li><strong>Ranked 9th</strong> at the prestigious World Robotics Competition</li>
            <li>Demonstrated innovative design and programming skills</li>
            <li>This achievement became the foundation for our growth</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div className="shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-xl md:text-4xl font-bold text-indigo-600 mb-3">A Year of Resilience</h3>
          
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Club on Break due to COVID</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">The pandemic forced our club to take a pause:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Activities were suspended due to COVID-19 restrictions</li>
            <li>A challenging period for the team as we couldn't meet in person</li>
          </ul>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Club Resumes Activities</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">After months of lockdown, we bounced back:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Restarted with exciting <strong>Arduino projects</strong></li>
            <li>Team members focused on building skills in electronics and programming</li>
            <li>This served as the groundwork for our future robotics competitions</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div className="shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-xl md:text-4xl font-bold text-indigo-600 mb-3">A New Chapter: Leadership and Growth</h3>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Leadership Transition</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">In 2021, the club saw a new beginning:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li><strong>Zac</strong> took over as President, steering the team with fresh ideas</li>
            <li>New members were introduced, and the team regained its strength</li>
          </ul>
          <img 
            src={Club_2021.src} 
            alt="Leadership transition" 
            className="w-full h-auto rounded-lg shadow-sm mb-6" 
          />
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Competitions</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">We re-entered the competitive scene with enthusiasm:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Competed against top universities like <strong>USC, CSUN, Cal Poly SLO, and Mt. SAC</strong></li>
            <li>Enhanced our robotics strategies and skills through tough competition</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div className="shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-xl md:text-4xl font-bold text-indigo-600 mb-3">Breaking Barriers in 2022</h3>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Competition Participation</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">This year was full of action and success:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Participated in competitions at <strong>CSUN</strong> and <strong>Mt. SAC</strong></li>
            <li>Continued refining our robots and collaboration within the team</li>
          </ul>
          <video src={'https://drive.google.com/file/d/1EAhYc_jPTB0UIh78-NUPinDn0DhRi_1l/view?usp=drive_link'} width="600" height="300" controls/>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Top 30 in World Skills</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">A proud moment for the team:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Ranked in the <strong>Top 30</strong> at the World Skills Competition</li>
            <li>Qualified for Worlds, but unable to attend due to funding constraints</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div className="shadow-md p-6 rounded-lg mb-6">
          <h3 className="text-xl md:text-4xl font-bold text-indigo-600 mb-3">2023: The Year of Triumph</h3>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">Competitions</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">We faced new challenges and made significant progress:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Competed against top schools like <strong>CSUN, Mt. SAC, and Cal Poly SLO</strong></li>
            <li>Refined our robotics designs and strategies, performing better than ever</li>
          </ul>
  
          <h4 className="text-lg md:text-2xl font-semibold text-indigo-500 mb-2">VEX World's Tournament</h4>
          <p className="text-foreground/90 text-base md:text-xl mb-4">Our biggest achievement of the year:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground text-sm md:text-xl">
            <li>Qualified for the prestigious <strong>VEX World's Tournament</strong></li>
            <li>Competed on a global stage, showcasing our skills against the world's best teams</li>
            <li>This was the culmination of years of dedication and teamwork, marking one of our greatest successes</li>
          </ul>
          <img 
            src={VexWorlds.src}
            alt="2023 VEX World Tournament" 
            className="w-full h-auto rounded-lg shadow-sm" 
          />
        </div>
      ),
    }
  ];
  
  
  return (
    <div className="w-full h-fit">
      <Timeline data={data} />
    </div>
  );
}
