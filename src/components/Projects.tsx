'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { MediumHandler } from "@/lib/medium-util";

type ApiResponse = {
  // Define your expected API shape here
  message?: string;
  data?: any;
  error?: string;
};

type ProjectsType = {
  title: string;
  description: string;
  date: Date;
  tags: Array<string>;
  type: string,
  link: string
}

const Projects = () => {
  const [posts, setPosts] = useState<ProjectsType[] | []>([]);

  const setupPosts = async () => {
    fetch('/api/latest-posts')
    .then((res) => res.json())
    .then((json: any) => {
      if (!json) {
        setPosts([]);
        return;
      }

      setPosts(
        json.map((post: any) => ({
          title: post.title,
          description: post.description,
          date: new Date(post.created),
          tags: post.category?.slice(0,5),
          type: "blog",
          link: post.link,
        }))
      );
    })
    .catch((err) => console.error('Fetch error:', err));
    // setPosts(posts);
  }

  useEffect(() => {
    setupPosts();
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Projects & Articles
        </h2>
        <p className="text-muted-foreground">
          Recent work and thoughts
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((item: ProjectsType, index: number) => (
          <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.type === 'project' ? 'default' : 'secondary'} className="text-xs">
                      {item.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date?.toDateString()}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 truncate">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex-shrink-0"
                  asChild
                >
                  <a 
                    href={item.link} 
                    target={item.type === 'blog' ? "_blank" : undefined}
                    rel={item.type === 'blog' ? "noopener noreferrer" : undefined}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <Button 
          variant="outline" 
          asChild
          className="hover:shadow-elegant transition-shadow"
        >
          <a 
            href="https://blog.backinagist.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View All Articles
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;