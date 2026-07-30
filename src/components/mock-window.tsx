export function MockWindow({
  accent,
  label,
}: {
  accent: string;
  label: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-primary/10 transition-shadow duration-500 hover:shadow-accent/20">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 rounded-md bg-background px-3 py-0.5 text-[10px] text-muted">
          app.spereon.codes
        </span>
      </div>
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] ${accent}`}
      >
        <div className="flex h-full gap-4">
          <div className="hidden w-1/4 flex-col gap-2 sm:flex">
            <div className="h-8 rounded-lg bg-white/25" />
            <div className="h-4 w-4/5 rounded-md bg-white/15" />
            <div className="h-4 w-3/5 rounded-md bg-white/15" />
            <div className="h-4 w-4/5 rounded-md bg-white/15" />
            <div className="h-4 w-2/3 rounded-md bg-white/15" />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex gap-3">
              <div className="h-16 flex-1 rounded-xl bg-white/25" />
              <div className="h-16 flex-1 rounded-xl bg-white/20" />
              <div className="h-16 flex-1 rounded-xl bg-white/25" />
            </div>
            <div className="flex-1 rounded-xl bg-white/15" />
            <div className="h-10 rounded-xl bg-white/20" />
          </div>
        </div>
        <span className="font-display absolute right-4 bottom-3 text-xs font-semibold tracking-wide text-white/80">
          {label}
        </span>
      </div>
    </div>
  );
}
