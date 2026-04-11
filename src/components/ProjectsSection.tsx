import { ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  creativeMode: boolean;
}

const projects = [
  {
    title: "This Portfolio",
    description:
      "My personal website — minimalist with a hidden creative explosion. Built with React, TypeScript, and Tailwind CSS. Yes, you're looking at it right now!",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Art & Illustrations",
    description:
      "A collection of my paintings and digital art. From abstract compositions to character design — check out my creative side on Instagram.",
    tags: ["Art", "Illustration", "Painting"],
    link: "https://www.instagram.com/evainbowsk/",
  },
];

const ProjectsSection = ({ creativeMode }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold mb-4 transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          Projects & Art
        </h2>
        <p className="text-muted-foreground mb-12">
          Building my portfolio one dream at a time. More coming soon!
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border transition-all duration-500 group ${
                creativeMode
                  ? "rainbow-border bg-card hover:shadow-lg"
                  : "border-border bg-card hover:border-foreground/20 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:underline">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full transition-all duration-500 ${
                      creativeMode
                        ? "rainbow-gradient text-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
