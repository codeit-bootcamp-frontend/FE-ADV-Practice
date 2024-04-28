function AnimatedAnchor() {
  return (
    <a
      href="https://themes.shopify.com?locale=en"
      className="group flex justify-start items-center"
      data-component-name=""
    >
      <span className="underline font-semibold inline-block mr-2">
        Theme Store
      </span>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform align-bottom"
      >
        <path
          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  );
}

export default AnimatedAnchor;
