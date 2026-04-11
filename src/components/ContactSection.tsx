import { Mail, Linkedin, Instagram } from "lucide-react";

interface ContactSectionProps {
  creativeMode: boolean;
}

const ContactSection = ({ creativeMode }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold mb-4 transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Have a project idea? Want to collaborate? Or just want to say hi? I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:evalps24@gmail.com"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-500 ${
              creativeMode
                ? "rainbow-gradient text-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            <Mail className="w-4 h-4" />
            evalps24@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/evainbowsk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
