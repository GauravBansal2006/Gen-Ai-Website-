export function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]">
        <div className="h-[200%] w-[200%] animate-grid bg-grid bg-[length:48px_48px]" />
      </div>
      <div className="absolute inset-0 bg-background/70 dark:bg-background/55" />
    </div>
  );
}
