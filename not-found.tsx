import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <p className="font-mono text-primary">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">This route drifted out of the current timeline.</p>
        <Button asChild className="mt-8">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </section>
  );
}
