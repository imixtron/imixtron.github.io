'use client';

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button";

const Social = () => {
    return (
      <div className="flex space-x-4">
        <Button onClick={() => window.open('http://github.com/imixtron')} variant="ghost" size="icon" className="hover:scale-110 transition-transform">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button onClick={() => window.open('http://linkedin.com/in/imixtron')} variant="ghost" size="icon" className="hover:scale-110 transition-transform">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
        <Button onClick={() => window.open('http://x.com/imixtron')} variant="ghost" size="icon" className="hover:scale-110 transition-transform">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button onClick={() => window.open('mailto:imixtron@hotmail.com')} variant="ghost" size="icon" className="hover:scale-110 transition-transform">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </div>
    )
}

export default Social;