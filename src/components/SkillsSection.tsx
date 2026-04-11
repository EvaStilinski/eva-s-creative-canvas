import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillsSectionProps {
  creativeMode: boolean;
}

const skills = [
  { name: "React", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "Python", level: 65 },
  { name: "AI / ML Basics", level: 60 },
  { name: "UI/UX Design", level: 85 },
  { name: "Cloud & Databases", level: 60 },
  { name: "3D / VR Concepts", level: 45 },
  { name: "Digital Art", level: 90 },
];

const learningNext = [
  "Three.js & WebXR — for building VR/AR experiences in the browser",
  "Blender & 3D Modeling — to create your own VR assets",
  "Prompt Engineering — master AI tools to 10x your output",
  "Figma Advanced — for professional UI/UX workflows",
  "Unity or Unreal Engine — industry-standard VR/AR platforms",
];

const SkillsSection = ({ creativeMode }: SkillsSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: barsRef, isVisible: barsVisible } = useScrollReveal(0.1);
  const { ref: learningRef, isVisible: learningVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className={`transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold mb-12 transition-all duration-700 ${
              creativeMode ? "rainbow-text" : "text-foreground"
            }`}
          >
            Skills & Tools
          </h2>
        </div>

        <div ref={barsRef} className="space-y-4 mb-16">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group transition-all duration-500 ${barsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: barsVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-border overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    creativeMode ? "rainbow-gradient" : "bg-foreground"
                  }`}
                  style={{
                    width: barsVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 80 + 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={learningRef} className={`transition-all duration-700 delay-200 ${learningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
            🚀 What I'm Learning Next
          </h3>
          <ul className="space-y-2">
            {learningNext.map((item) => (
              <li key={item} className="text-muted-foreground flex items-start gap-2">
                <span className={creativeMode ? "rainbow-text" : "text-foreground"}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
