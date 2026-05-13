const cells = Array.from({ length: 140 }, (_, index) => {
  const value = (index * 7 + index * index) % 5;
  return value;
});

const shades = [
  "bg-muted",
  "bg-primary/20",
  "bg-primary/35",
  "bg-primary/60",
  "bg-primary"
];

export function ContributionGrid() {
  return (
    <div className="glass rounded-lg p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold">Build Consistency</h3>
          <p className="text-sm text-muted-foreground">Mock contribution map for coding, writing, and event work.</p>
        </div>
        <span className="text-sm font-medium text-primary">1,247 commits</span>
      </div>
      <div className="grid grid-cols-20 gap-1 overflow-hidden">
        {cells.map((cell, index) => (
          <span
            aria-label={`Contribution cell ${index + 1}`}
            className={`aspect-square rounded-[3px] ${shades[cell]}`}
            key={`${cell}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
