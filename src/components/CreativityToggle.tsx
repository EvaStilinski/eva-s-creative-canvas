import { Sparkles } from "lucide-react";

interface CreativityToggleProps {
  creativeMode: boolean;
  onToggle: () => void;
}

const CreativityToggle = ({ creativeMode, onToggle }: CreativityToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-heading font-semibold text-sm shadow-lg transition-all duration-500 hover:scale-105 active:scale-95 ${
        creativeMode
          ? "rainbow-gradient text-foreground shadow-rainbow-purple/30"
          : "bg-primary text-primary-foreground hover:shadow-xl"
      }`}
      aria-label="Toggle creative mode"
    >
      <Sparkles className={`w-4 h-4 ${creativeMode ? "animate-spin" : ""}`} />
      {creativeMode ? "Back to Minimal" : "✨ Unleash Creativity"}
    </button>
  );
};

export default CreativityToggle;
