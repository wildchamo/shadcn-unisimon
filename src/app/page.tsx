"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Home() {
  return (
    <main className="flex gap-4">
      <h1>Home</h1>
      <Button variant="default" size="lg">
        botón 1
      </Button>
      <Button variant="outline" size="sm">
        botón 2
      </Button>
      <Button variant="secondary">botón 3</Button>
      <Button variant="ghost" size="xl">
        botón 4
      </Button>
      <Button variant="link" className="text-primary-foreground">
        botón 5
      </Button>

      <Sheet>
        <SheetTrigger>
          {" "}
          <Button variant="unisimon" size="default">
            botón 6
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Hola, Unisimon!!</SheetTitle>
            <SheetDescription>Está buena la charla? 😁.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </main>
  );
}
