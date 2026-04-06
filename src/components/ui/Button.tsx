import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant,
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-block font-serif text-xs uppercase tracking-[2.5px] px-10 py-4 rounded-none transition-colors duration-400 cursor-pointer";

  const variants = {
    primary:
      "bg-brass text-ink hover:bg-ink hover:text-brass",
    secondary:
      "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
