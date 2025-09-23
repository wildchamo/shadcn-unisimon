import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="flex gap-2">
        <Button variant="default" size="lg">
          Button
        </Button>
        <Button variant="destructive">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="success">Success</Button>
      </div>
    </main>
  );
}
