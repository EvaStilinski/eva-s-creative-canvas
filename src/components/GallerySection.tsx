import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySectionProps {
  creativeMode: boolean;
}

const paintings = [
  {
    title: "Abstract Dreams",
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    full: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=90",
  },
  {
    title: "Color Burst",
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80",
    full: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=90",
  },
  {
    title: "Fluid Motion",
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80",
    full: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=90",
  },
  {
    title: "Ethereal Light",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
    full: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=90",
  },
  {
    title: "Vivid Layers",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",
    full: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=90",
  },
  {
    title: "Textured Soul",
    src: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&q=80",
    full: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=1200&q=90",
  },
];

const GallerySection = ({ creativeMode }: GallerySectionProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % paintings.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + paintings.length) % paintings.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold mb-4 transition-all duration-700 ${
            creativeMode ? "rainbow-text" : "text-foreground"
          }`}
        >
          Art Gallery
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          A glimpse into my paintings and illustrations. Click any piece to view it up close.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {paintings.map((painting, index) => (
            <button
              key={painting.title}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-square overflow-hidden rounded-xl border transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-ring ${
                creativeMode
                  ? "rainbow-border hover:shadow-lg"
                  : "border-border hover:border-foreground/20 hover:shadow-sm"
              }`}
            >
              <img
                src={painting.src}
                alt={painting.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                <span className="text-background font-heading font-semibold text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {painting.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-8 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[80vh] px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={paintings[lightboxIndex].full}
              alt={paintings[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center mt-4 font-heading font-semibold text-foreground">
              {paintings[lightboxIndex].title}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-8 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
