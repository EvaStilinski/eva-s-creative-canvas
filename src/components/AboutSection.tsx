interface AboutSectionProps {
  creativeMode: boolean;
}

const AboutSection = ({ creativeMode }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold mb-8 transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a 23-year-old software engineer and artist from a world where technology meets creativity. 
            I believe the best things happen when you combine logic with imagination — and that's exactly what I do.
          </p>
          <p>
            I love meeting new people and understanding their visions so I can help bring them to life, 
            all while chasing my own dreams. My path is leading me toward VR/AR development and digital art, 
            where I can build immersive worlds that blur the line between reality and imagination.
          </p>
          <p>
            When I'm not coding or designing, you'll find me painting — turning feelings and ideas into 
            something you can see and touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
