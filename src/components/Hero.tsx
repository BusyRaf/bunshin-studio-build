import { useNavigate } from "react-router-dom";
import { Shield, Clock, Check } from "lucide-react";
import ghost from "../../Assets/ghost.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl pt-24 md:pt-32">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <img
                src={ghost}
                alt="Bunshin ghost"
                className="h-5 w-5"
              />
            </span>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-gradient-cyan">
              Bunshin Development Studios
            </p>
          </div>
          <div
            className="mx-auto mt-[calc((0.9rem-2px)/2)] mb-[calc((0.9rem-2px)/2)] h-[2px] w-8 rounded-full bg-[#00bcd4]"
            aria-hidden
          />
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Professional Digital Presence. <br className="hidden md:block" />
          <span className="text-gradient-cyan">Delivered.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-sans"
          style={{ animationDelay: "0.2s" }}
        >
          A high-performance website for your business. Live in 72 hours.
        </p>
        <div
          className="flex flex-col items-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => navigate("/contact")}
            className="font-mono text-base bg-primary text-primary-foreground px-8 py-4 rounded-md cyan-glow hover:animate-pulse-glow transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            Check Availability
          </button>
          <div className="mt-8 w-full max-w-md border-t border-border pt-6">
            <div className="flex justify-around items-center gap-4 text-[12px] font-sans" style={{ color: "#8899bb" }}>
              <div className="flex items-center gap-2">
                <Shield size={14} strokeWidth={2} />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} strokeWidth={2} />
                <span>Live in 72 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2} />
                <span>100% Yours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
