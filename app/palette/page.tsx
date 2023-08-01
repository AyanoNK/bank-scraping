export default function Home() {
  return (
    <main className="grid grid-flow-row">
      <a
        href="https://realtimecolors.com/?colors=0a0a05-ffffff-4b458c-e5d9ec-5276a7"
        className="h-28"
      >
        Click here for palette
      </a>
      <span className="h-28 text-text">Text color</span>
      <span className="h-28 bg-primary text-white">Primary color</span>
      <span className="h-28 bg-secondary">Secondary color</span>
      <span className="h-28 bg-zinc-50">Background color</span>
      <span className="h-28 bg-accent text-white">
        Enhancer color 2 (will be graph color)
      </span>
    </main>
  );
}
