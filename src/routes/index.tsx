import { createFileRoute } from "@tanstack/react-router";
import helloImage from "@/assets/hello.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello | LP Senior Care" },
      { name: "description", content: "Welcome to LP Senior Care." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-4">
      <h1 className="text-6xl font-bold text-foreground">Hello</h1>
      <img
        src={helloImage}
        alt="Caregiver helping an elderly person at LP Senior Care"
        width={1024}
        height={1024}
        className="w-full max-w-md rounded-2xl shadow-lg"
      />
    </div>
  );
}
