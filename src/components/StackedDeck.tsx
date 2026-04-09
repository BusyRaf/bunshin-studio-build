import { useCallback } from "react";
import { motion, type Transition } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/data/portfolioProjects";

const MECHANICAL: Transition = {
  type: "spring",
  stiffness: 520,
  damping: 46,
  mass: 0.85,
};

type StackedDeckProps = {
  projects: PortfolioProject[];
  stackOrder: string[];
  onCycle: () => void;
};

const StackedDeck = ({ projects, stackOrder, onCycle }: StackedDeckProps) => {
  const byId = useCallback((id: string) => projects.find((p) => p.id === id), [projects]);

  const ordered = stackOrder.map((id) => byId(id)).filter(Boolean) as PortfolioProject[];
  const front = ordered[0];
  const canCycle = projects.length > 1;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="max-w-lg mx-auto">
        <div
          className={`relative aspect-[16/10] w-full select-none [perspective:1200px] ${canCycle ? "cursor-pointer" : "cursor-default"}`}
          onClick={canCycle ? onCycle : undefined}
          onKeyDown={
            canCycle
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onCycle();
                  }
                }
              : undefined
          }
          role={canCycle ? "button" : undefined}
          tabIndex={canCycle ? 0 : undefined}
          aria-label={canCycle ? "Cycle to next project in the stack" : undefined}
        >
          {ordered.map((project, stackIndex) => {
            const isFront = stackIndex === 0;
            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 rounded-xl overflow-hidden border border-border bg-card shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                initial={false}
                animate={{
                  x: stackIndex * -5,
                  y: stackIndex * 14,
                  scale: 1 - stackIndex * 0.04,
                  opacity: stackIndex < 4 ? 1 - stackIndex * 0.06 : 0,
                  rotateX: stackIndex === 0 ? 0 : -3,
                }}
                transition={MECHANICAL}
                style={{
                  zIndex: ordered.length - stackIndex,
                  pointerEvents: isFront ? "auto" : "none",
                  transformOrigin: "50% 0%",
                }}
              >
                <img
                  src={project.imageSrc}
                  alt={`${project.title} homepage screenshot`}
                  className="h-full w-full object-cover object-left-top"
                  draggable={false}
                />
                {isFront && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent pt-16 pb-4 px-4">
                    <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase">Active project</p>
                    <p className="font-sans text-base md:text-lg text-foreground font-medium leading-snug mt-1">
                      {project.title}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {front && (
        <motion.div
          key={front.id}
          className="mt-10 space-y-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={MECHANICAL}
        >
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">{front.summary}</p>
          <ul className="list-none space-y-4 p-0 m-0">
            {front.highlights.map((item) => (
              <li key={item.heading} className="text-sm font-sans leading-relaxed text-muted-foreground">
                <span className="font-mono font-semibold text-primary">{item.heading}:</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:justify-end pt-2">
            <Button
              asChild
              size="lg"
              className="font-mono w-full sm:w-auto cyan-glow hover:bg-accent-purple hover:text-accent-foreground transition-all duration-300"
            >
              <a href={front.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                Launch Project
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </motion.div>
      )}

      {canCycle && (
        <p className="mt-4 text-center text-xs text-muted-foreground font-mono">
          Click the top card to advance the stack
        </p>
      )}
    </div>
  );
};

export default StackedDeck;
