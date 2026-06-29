import Link from "next/link";

const BottomCTA = () => {
  return (
    <section className="py-32 md:py-40 border-t border-border text-center">
      <div className="container mx-auto px-6">
        <span className="block mx-auto mb-8 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
        <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.03] tracking-[-0.02em] max-w-[16ch] mx-auto mb-9 text-balance">
          We&apos;re already living our dream.{" "}
          <span className="text-primary">How can we help make yours come true?</span>
        </h2>
        <Link
          href="/contact"
          className="font-sans font-semibold text-base bg-[#6a37e0] text-white px-8 py-4 rounded-xl hover:bg-[#7b4bff] transition-colors"
        >
          Start a build
        </Link>
      </div>
    </section>
  );
};

export default BottomCTA;
