import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  variant,
  href,
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-block font-serif text-xs uppercase tracking-[2px] px-10 py-4 rounded-none whitespace-nowrap transition-colors duration-400 cursor-pointer";

  const variants = {
    primary:
      "bg-brass text-ink hover:bg-ink hover:text-brass",
    secondary:
      "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
