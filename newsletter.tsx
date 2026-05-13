import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="container py-20">
      <div className="glass overflow-hidden rounded-lg p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Campus signal</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Notes from AI builds and college life.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A calm newsletter UI for future updates about Gen AI experiments, hackathon retrospectives, and practical dev notes.
            </p>
          </div>
          <form className="flex w-full gap-2 md:w-[360px]">
            <Input aria-label="Email address" placeholder="you@college.edu" type="email" />
            <Button aria-label="Subscribe" size="icon" type="button">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
