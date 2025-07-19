// 'use client';

// import { usePathname, useSearchParams } from 'next/navigation';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const ThreeColumnSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: 3 columns, Mobile: stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Section 1: About Me */}
            <div className="lg:col-span-1">
              <About />
            </div>
            
            {/* Section 2: Projects/Blog */}
            <div className="lg:col-span-1">
              <Projects />
            </div>
            
            {/* Section 3: Contact */}
            <div className="lg:col-span-1">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;