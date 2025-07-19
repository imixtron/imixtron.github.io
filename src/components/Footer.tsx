import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left side - Name and tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Imad Ali</h3>
              <p className="text-muted-foreground">Building digital experiences</p>
            </div>

            {/* Right side - Social links */}
            <Social />
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} imixtron.com All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;