import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";

import jobbie from "../../../assests/jobbie.png"
import msg from "../../../assests/msg-app.png"
import study from "../../../assests/study-notion.png"

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Worked on Jobbie as a frontend developer, have fixed media queries and UI bugs, also working on new upcoming features and have worked on to convert html to pdf.",
      name: "Jobbie",
      designation: "Frontend || React.js || Vite",
      link:`https://jobbie.io/` ,
      src: jobbie.src, // Use the `src` property
    },
    {
      quote:
        "Designed a user-friendly feedback-sharing platform with TypeScript & Next.js.Implemented AI integration from Vercel AI Sdk for message suggestions.",
      name: "Anonymous Message App",
      designation: "NEXT.JS || TYPESCRIPT || AI || SCHADCN-UI || AUTH.JS",
      src: msg.src,
      link:`https://anonymous-msg-bite.vercel.app/` ,
    },
    {
      quote:
        "Developed a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
      name: "Study Notion",
      designation: "MERN STACK || REDUX || TAILWIND CSS",
      src: study.src,
      link:`https://study-notion-edtech-project.vercel.app/` ,
    },
    
  ];

  return <AnimatedTestimonials  testimonials={testimonials} />;
}
