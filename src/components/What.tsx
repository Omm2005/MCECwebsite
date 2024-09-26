import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LuSparkle, LuOctagon, LuTriangle } from "react-icons/lu";


const What = () => {
  const theWhats = [
    {
      title: 'Design',
      icon: LuSparkle,
      description: () => {
        return (
          <p className="md:w-1/2">
            We start by brainstorming ideas and sketching designs. Using CAD software, we create detailed models of our robots and components, making sure everything fits and works as intended before moving to the next steps.
          </p>
        )
      }
    },
    {
      title: 'Build',
      icon: LuOctagon,
      description: () => {
        return (
          <p className="md:w-1/2">
           Once the designs are ready, we jump into building. We cut, assemble, and program the robot, carefully testing each part along the way. It’s a hands-on process that involves teamwork, problem-solving, and plenty of trial and error.
          </p>
        )
      }
    },
    {
      title: 'Compete',
      icon: LuTriangle,
      description: () => {
        return (
          <p className="md:w-1/2">
            After the build is complete, we test the robot&apos;s performance and make adjustments. Then we compete in the Vex Tournament, where our robot navigates challenges and faces off against other teams creations.
          </p>
        )
      }
    }
  ]
  return (
    <div className="py-20 flex flex-col gap-10 h-screen" >
      <div className='h-auto'>
        <h1 className='text-4xl h-20 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-semibold text-muted-foreground/80'>
          What do we do?
        </h1>
      </div>
      <p className='justify-center flex items-center md:w-1/2'>
      At MCEC, we take ideas from concept to competition. Whether you're designing, building, or competing, we're all about hands-on learning and pushing the boundaries of robotics. Join us in the journey!
      </p>
      <hr className='bg-muted-foreground' />
      <Accordion type="single" collapsible >
        {theWhats.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center justify-between py-4 text-xl font-medium w-full">
              <div className="flex items-center space-x-4">
                <item.icon className="text-muted-foreground scale-150 fill-muted-foreground"/>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-6xl" >{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-4 text-foreground/90 justify-end items-end flex pr-20 text-sm md:text-base lg:text-xl">
              {item.description()}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
}

export default What;