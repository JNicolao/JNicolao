import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all border-none group hover:shadow-xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg">
      <div className="relative overflow-hidden h-52">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-6">
        <h3 className="mb-3 text-[22px] font-extralight leading-[1.2] tracking-tight">
          {title}
        </h3>
        <p className="mb-4 text-[15px] font-light leading-snug tracking-tight text-gray-700">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-none"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100/50 font-medium gap-2"
            >
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </Button>
          )}

          {githubUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100/50 font-medium gap-2"
            >
              <Link href={githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
