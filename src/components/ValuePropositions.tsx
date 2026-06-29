const steps = [
  { n: "01", title: "Tell us what you're building", body: "A conversation, not paperwork. No sales call, no pressure." },
  { n: "02", title: "We define the MVP together", body: "We strip the idea down to the functionality that actually delivers the value. That core ships first." },
  { n: "03", title: "We build and launch the core", body: "Real, working software in front of real people, fast. You own the vision the whole way." },
  { n: "04", title: "Then the bells and whistles", body: "Once the core proves out, we layer on everything else, deliberately." },
];

const ValuePropositions = () => {
  return (
    <section id="how-we-work" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">How a build works</h2>
        <div className="grid md:grid-cols-4 border-t border-border">
          {steps.map((s, i) => (
            <div key={s.n} className={`relative pt-8 pr-6 pb-10 ${i < 3 ? "md:border-r border-border" : ""}`}>
              <span className="absolute top-[-1px] left-0 h-0.5 w-9 bg-primary" aria-hidden />
              <span className="font-mono text-primary text-sm">{s.n}</span>
              <h3 className="font-display text-lg font-bold mt-3 mb-2.5">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
