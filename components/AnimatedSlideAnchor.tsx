function AnimatedSlideAnchor() {
  return (
    <div className="w-96">
      <a
        href="/sell"
        className="text-lg overflow-hidden border-b pb-4 font-medium group flex flex-row default:border-black w-4/5"
      >
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="reduced-motion:group-hover:-translate-x-full h-6 w-6 origin-left -translate-x-full self-center opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="reduced-motion:group-hover:translate-x-0 -translate-x-5 transition-transform duration-500 will-change-transform group-hover:translate-x-2">
          Start selling
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="reduced-motion:group-hover:translate-x-0 ml-auto h-6 w-6 origin-left translate-x-0 self-center justify-self-end opacity-100 transition-all duration-500 will-change-transform group-hover:translate-x-full group-hover:opacity-0"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default AnimatedSlideAnchor;
