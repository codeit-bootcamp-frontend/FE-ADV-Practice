function ArrowSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      height="33"
      width="33"
      className="inline-block align-bottom"
    >
      <path
        d="M2.40002 8L13.6 8"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.59998 4L13.6 8L9.59998 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

function MarqueeItem() {
  return (
    <div className="inline-block">
      {"START YOUR FREE TRIAL"}
      <span className="mx-7 md:mx-10 align-text-bottom">
        <ArrowSVG />
      </span>
    </div>
  );
}

function MarqueeItems() {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <MarqueeItem key={i} />
        ))}
    </>
  );
}

function MarqueeLeftToRight() {
  return (
    <div className="w-full h-16 text-xl md:h-20 md:text-3xl font-semibold overflow-hidden relative text-black bg-gradient-marquee flex">
      <div className="animate-marquee-center-to-left flex h-full items-center whitespace-nowrap reduced-motion:animate-none reverse">
        <MarqueeItems />
      </div>
      <div className="animate-marque-right-to-center absolute top-0 flex h-full items-center whitespace-nowrap reduced-motion:animate-none reverse">
        <MarqueeItems />
      </div>
    </div>
  );
}

export default MarqueeLeftToRight;
