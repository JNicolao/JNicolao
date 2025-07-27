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
    <Card className="overflow-hidden transition-all duration-300 border-none group hover:shadow-xl backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl shadow-lg border border-white/40 dark:border-slate-700/40 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="relative overflow-hidden h-52">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-6">
          <h3 className="mb-3 text-[22px] font-semibold leading-[1.2] tracking-tight font-sans text-gray-900 dark:text-white transition-colors duration-500">
            {title}
          </h3>
          <p className="mb-4 text-[15px] font-light leading-snug tracking-tight text-gray-700 dark:text-gray-300 font-sans transition-colors duration-500">
            {description}
          </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 border-none transition-colors duration-500 font-sans"
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
              className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-800/30 font-medium gap-2 transition-colors duration-500 font-sans"
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
              className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-800/30 font-medium gap-2 transition-colors duration-500 font-sans"
            >
              <Link href={githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
      </div>
    </Card>
  );
}
