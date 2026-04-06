interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 346 96"
      className={className}
      aria-label="A-Frame of Napa logo"
      role="img"
      fill="currentColor"
    >
      <polygon points="70.5,4 73.5,4 38,92 33,92" />
      <polygon points="70.5,4 73.5,4 111,92 106,92" />
      <circle cx="72.0" cy="86.0" r="3.8" />
      <g transform="translate(138.0,68.0) scale(0.040000,-0.040000)">
        <path d="M113 710H511V663H162V370H471V324H162V0H113Z" />
      </g>
      <g transform="translate(173.1,68.0) scale(0.040000,-0.040000)">
        <path d="M275 710Q315 710 354.5 698.5Q394 687 426.5 662.5Q459 638 479.0 600.0Q499 562 499 509Q499 469 487.0 431.5Q475 394 448.0 364.0Q421 334 378.0 316.0Q335 298 272 298H162V0H113V710ZM269 345Q322 345 357.0 360.0Q392 375 412.0 399.0Q432 423 440.5 451.5Q449 480 449 507Q449 539 437.5 567.0Q426 595 404.0 616.5Q382 638 351.0 650.5Q320 663 282 663H162V345ZM371 323 568 0H511L313 322Z" />
      </g>
      <polygon points="223.4,38 225.4,38 213.4,68 210.4,68" />
      <polygon points="223.4,38 225.4,38 238.4,68 235.4,68" />
      <g transform="translate(250.4,68.0) scale(0.040000,-0.040000)">
        <path d="M113 0V726H114L464 229L443 232L792 726H793V0H745V613L749 589L453 172H451L153 589L161 611V0Z" />
      </g>
      <g transform="translate(298.7,68.0) scale(0.040000,-0.040000)">
        <path d="M113 710H551V663H162V381H512V334H162V47H565V0H113Z" />
      </g>
    </svg>
  );
}
