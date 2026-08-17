import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  org: string;
  period: string;
  status: string;
  problem: string;
  role: string;
  stack: string[];
  outcomes: string[];
}

const statusDots: Record<string, string> = {
  "In production": "bg-emerald-500",
  Deployed: "bg-sky-500",
  "In development": "bg-amber-500",
};

export function ProjectCard({
  title,
  org,
  period,
  status,
  problem,
  role,
  stack,
  outcomes,
}: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden border-none backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-white/40 dark:border-slate-700/40 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className="relative z-10 h-full">
        <CardContent className="flex h-full flex-col p-6">
          <p className="text-xs font-medium tracking-wide uppercase text-indigo-700 dark:text-indigo-400 font-sans transition-colors duration-500">
            {org}
          </p>
          <h3 className="mt-1 text-[22px] font-semibold leading-[1.2] tracking-tight font-sans text-gray-900 dark:text-white transition-colors duration-500">
            {title}
          </h3>
          <p className="mt-1.5 mb-3 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300 font-sans transition-colors duration-500">
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusDots[status] ?? "bg-indigo-500"}`}
              aria-hidden="true"
            ></span>
            {status} · {period}
          </p>

          <p className="mb-4 text-[14px] font-light leading-snug tracking-tight text-gray-700 dark:text-gray-300 font-sans transition-colors duration-500">
            {problem}
          </p>

          <ul className="space-y-2 pl-5 mb-4">
            {outcomes.map((outcome, i) => (
              <li
                key={i}
                className="text-[14px] text-gray-700 dark:text-gray-300 font-light leading-snug relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-indigo-400 dark:before:bg-indigo-500 before:rounded-sm before:left-[-20px] before:top-[6px] font-sans transition-colors duration-500"
              >
                {outcome}
              </li>
            ))}
          </ul>

          <p className="mt-auto pt-3 border-t border-indigo-200/50 dark:border-indigo-700/50 text-[12px] text-gray-600 dark:text-gray-400 font-light font-sans transition-colors duration-500">
            {[role, ...stack].join(" · ")}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
