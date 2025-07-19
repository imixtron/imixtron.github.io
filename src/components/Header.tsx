import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Avatar + Name */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/imixtron.jpg" alt="Imad Ali" />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                IA
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Imad Ali</h1>
            </div>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://blog.backinagist.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;