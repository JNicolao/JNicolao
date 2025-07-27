import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  subskills: string[];
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="overflow-hidden border-none backdrop-blur-xl bg-white/40 dark:bg-slate-800/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 dark:border-slate-700/40 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-slate-700/30 dark:to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200/20 via-sky-200/20 to-indigo-200/20 dark:from-indigo-800/20 dark:via-sky-800/20 dark:to-indigo-800/20 rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <CardContent className="p-6">
          <h3 className="mb-4 text-[22px] font-semibold leading-[1.2] tracking-tight text-indigo-950 dark:text-white font-sans transition-colors duration-500">
            {title}
          </h3>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item hover:translate-x-1 transition-transform duration-300"
              >
                <div className="flex items-center mb-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 mr-2 rounded-sm"></span>
                  <span className="font-medium text-indigo-800 dark:text-indigo-300 text-lg font-sans transition-colors duration-500">
                    {skill.name}
                  </span>
                </div>
                <p className="text-[13px] text-gray-600 dark:text-gray-300 pl-4 border-l border-indigo-200/50 dark:border-indigo-700/50 font-light leading-tight font-sans transition-colors duration-500">
                  {skill.subskills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
