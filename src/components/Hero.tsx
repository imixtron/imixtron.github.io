import { Button } from "@/components/ui/button";
import { CoolMode } from "./magicui/cool-mode";
import { WordRotate } from "./magicui/word-rotate";
import Social from "./Social";
// import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const punchLines = [
  "Engineering the Internet, One API at a Time.",
  "Scaling Backend Architectures.",
  "Building Products that last",
  "Shipping Code. Scaling Systems. Staying Curious.",
  "Keeping It Clean — Code, Docs, and Architecture.",
  "Just a Guy Who Turns Coffee Into Distributed Systems.",
  "I Build Backends That Don’t Break and Docs That Don’t Suck.",
  "Less Talk, More Logs. Mostly Java & TypeScript.",
  "Code That Scales, Blogs That Explain.",
  "Not Just Writing Code, Writing Context.",
  "Code, Clarity & the Occasional Blog Post.",
  "Working Remotely, Thinking Globally, Building Quietly.",
  "Shipping Code, Sharing Ideas",
  "Backend Engineer, Platform Thinker, Dev Tools Enthusiast.",
  "I Design Systems That Power Products.",
  "Engineering APIs, Infra, and Ideas for Over a Decade.",
];

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            {/* <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
              Imad Ali
            </h1> */}
            <WordRotate className="text-3xl md:text-4xl font-bold tracking-tight text-foreground" words={punchLines} />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            I'm <CoolMode><span className="decoration-dotted underline cursor-pointer">Imad Ali</span></CoolMode> — a backend engineer with 10+ years of experience crafting resilient platforms, public APIs, and developer-friendly tools. 
            I turn complex problems into elegant, maintainable systems.
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" className="text-base font-light hover:bg-transparent hover:text-foreground" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-base font-light hover:bg-transparent hover:text-foreground" asChild>
              <a href="#about">About</a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;