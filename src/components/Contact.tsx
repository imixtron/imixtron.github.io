import CalEmbedButton from "@/components/custom/CalEmbedButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@imixtron.com",
      action: "mailto:hello@imixtron.com"
    },
    {
      icon: MessageSquare,
      title: "Let's Chat",
      description: "Book a Call with me",
      action: "popup"
    },
    {
      icon: Phone,
      title: "Response Time",
      description: "Within 24 hours",
      action: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Get In Touch
        </h2>
        <p className="text-muted-foreground">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.action === "popup" ? (
                  <CalEmbedButton size="sm" className="shadow-elegant">Book</CalEmbedButton>
                  // <ContactPopup>
                  //   <Button size="sm" className="shadow-elegant">
                  //     Send
                  //   </Button>
                  // </ContactPopup>
                ) : item.action ? (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={item.action}>
                      Contact
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contact;
