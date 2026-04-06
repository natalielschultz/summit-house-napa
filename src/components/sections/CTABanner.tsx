import Button from "@/components/ui/Button";

interface CTABannerProps {
  headline: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "dark" | "brass";
}

export default function CTABanner({
  headline,
  buttonLabel,
  buttonHref,
  variant = "dark",
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`w-full py-16 md:py-20 ${isDark ? "bg-ink" : "bg-brass"}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2
          className={`font-serif font-extralight uppercase tracking-[4px] text-2xl md:text-3xl lg:text-4xl ${isDark ? "text-parchment" : "text-ink"} leading-tight`}
        >
          {headline}
        </h2>
        <Button
          variant={isDark ? "primary" : "secondary"}
          href={buttonHref}
          className={
            isDark
              ? ""
              : "border-ink text-ink hover:bg-ink hover:text-brass"
          }
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
