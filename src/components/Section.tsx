type Props = {
  id?: string;
  className?: string;
  tone?: "light" | "sand" | "ocean";
  children: React.ReactNode;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  light: "bg-sand-50",
  sand: "bg-sand-100",
  ocean: "bg-ocean-900 text-sand-50",
};

export function Section({ id, className = "", tone = "light", children }: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">{children}</div>
    </section>
  );
}
