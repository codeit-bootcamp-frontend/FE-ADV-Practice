function AnimateSpin() {
  return (
    <svg
      viewBox="0 0 558 558"
      width="558"
      height="558"
      fill="none"
      aria-hidden="true"
      className="animate-spin"
    >
      <defs>
        <linearGradient
          id=":Rddbqnla:"
          x1="79"
          y1="16"
          x2="105"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13B5C8"></stop>
          <stop offset="1" stopColor="#13B5C8" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
        stroke="#13B5C8"
      ></path>
      <path
        d="M1 279C1 125.465 125.465 1 279 1"
        stroke="url(#:Rddbqnla:)"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}

export default AnimateSpin;
