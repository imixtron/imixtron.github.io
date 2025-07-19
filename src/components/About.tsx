import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern technologies and best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative problem-solving and innovative solutions for complex challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication and leadership skills."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions focused on speed, efficiency, and user experience."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          About Me
        </h2>
        <p className="text-muted-foreground">
          Passionate developer with expertise in creating digital experiences that combine 
          beautiful design with powerful functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-border hover:shadow-elegant transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="text-center pt-4">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div> */}
    </div>
  );
};

export default About;