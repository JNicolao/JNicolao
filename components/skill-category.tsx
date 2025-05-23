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
    <Card className="overflow-hidden border-none bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100/20">
      <CardContent className="p-6">
        <h3 className="mb-4 text-[22px] font-extralight leading-[1.2] tracking-tight text-indigo-950">
          {title}
        </h3>
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hover:translate-x-1 transition-transform duration-300"
            >
              <div className="flex items-center mb-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 mr-2"></span>
                <span className="font-medium text-indigo-800 text-lg">
                  {skill.name}
                </span>
              </div>
              <p className="text-[13px] text-gray-600 pl-4 border-l border-indigo-200/50 font-light leading-tight">
                {skill.subskills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
