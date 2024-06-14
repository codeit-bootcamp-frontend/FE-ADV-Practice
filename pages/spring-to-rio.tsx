import { useInView } from "react-intersection-observer";

function Title({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const styleClass = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  return (
    <div
      ref={ref}
      className={`transition-all ${styleClass}`}
    >
      <h2 className="text-6xl">{children}</h2>
    </div>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

function ReactObserver() {
  return (
    <div>
      {PAGE_TITLES.map((title) => (
        <Page key={title}>
          <Title>{title}</Title>
        </Page>
      ))}
    </div>
  );
}

export default ReactObserver;
