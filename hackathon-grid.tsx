import { Trophy } from "lucide-react";
import { hackathons } from "@/data/hackathons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HackathonGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {hackathons.map((event) => (
        <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-primary/40" key={event.name}>
          <CardHeader>
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Trophy className="h-5 w-5" />
              </span>
              <Badge>{event.date}</Badge>
            </div>
            <CardTitle>{event.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-primary">{event.result}</p>
            <p className="mt-3 text-sm text-muted-foreground">{event.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {event.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
