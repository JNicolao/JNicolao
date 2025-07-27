import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-6 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-primary/5 md:before:left-1/2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <span className="w-3 h-3 rounded-full bg-primary" />
          </div>

          <Card
            className={`w-full max-w-[calc(100vw-2rem)] mx-auto md:mx-0 md:max-w-none md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-0" : "md:ml-0"} border-none backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 dark:border-slate-700/40 relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[22px] font-light leading-[1.2] tracking-tight text-indigo-950 dark:text-white font-sans transition-colors duration-500 capitalize">
                      {item.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 border-indigo-200/50 dark:border-indigo-700/50 px-3 py-1 font-medium font-sans transition-colors duration-500"
                    >
                      {item.period}
                    </Badge>
                  </div>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium font-sans transition-colors duration-500">
                    {item.company}
                  </p>
                </div>

                <ul className="space-y-2 pl-5">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-[14px] text-gray-700 dark:text-gray-300 font-light leading-snug relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-indigo-400 dark:before:bg-indigo-500 before:rounded-sm before:left-[-20px] before:top-[6px] font-sans transition-colors duration-500"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
