interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  divider?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  divider = true,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-parchment" : "text-ink";
  const subtitleColor = light ? "text-parchment/70" : "text-text-muted";

  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      <h2
        className={`font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl ${titleColor} leading-tight`}
      >
        {title}
      </h2>
      {divider && (
        <div
          className="bg-brass"
          style={{ width: 120, height: 1 }}
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p
          className={`font-sans text-base md:text-lg ${subtitleColor} max-w-2xl leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
