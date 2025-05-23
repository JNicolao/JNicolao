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
            className={`w-full max-w-[calc(100vw-2rem)] mx-auto md:mx-0 md:max-w-none md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-0" : "md:ml-0"} border-none bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/20`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-[22px] font-extralight leading-[1.2] tracking-tight text-indigo-950">
                    {item.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-indigo-100/50 text-indigo-800 hover:bg-indigo-200 border-indigo-200/50 px-3 py-1 font-medium"
                  >
                    {item.period}
                  </Badge>
                </div>
                <p className="text-indigo-700 font-medium">{item.company}</p>
              </div>

              <ul className="space-y-2 pl-5">
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-gray-700 font-light leading-snug relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-indigo-400 before:rounded-sm before:left-[-20px] before:top-[6px]"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
