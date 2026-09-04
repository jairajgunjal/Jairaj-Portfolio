export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
