import dragonImage from "@/assets/dragon-rainbow.png";

interface HeroSectionProps {
  creativeMode: boolean;
}

const HeroSection = ({ creativeMode }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Dragon - only visible in creative mode */}
      <img
        src={dragonImage}
        alt="Rainbow dragon"
        width={1024}
        height={1024}
        className={`absolute right-[-5%] top-[10%] w-[40vw] max-w-lg transition-all duration-1000 pointer-events-none ${
          creativeMode
            ? "opacity-30 float-animation"
            : "opacity-0 scale-75"
        }`}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p
          className={`text-sm tracking-[0.3em] uppercase mb-6 transition-colors duration-700 ${
            creativeMode ? "rainbow-text font-bold" : "text-muted-foreground"
          }`}
        >
          AI Web Developer · Software Engineer · Artist
        </p>

        <h1
          className={`text-5xl sm:text-7xl md:text-8xl font-heading font-bold tracking-tight mb-6 transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          Eva Lucero
          <br />
          Pérez S.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Software engineer, making dreams come true step by step ✨
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-500 ${
              creativeMode
                ? "rainbow-gradient text-foreground shadow-lg shadow-rainbow-purple/20"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
