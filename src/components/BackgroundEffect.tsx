export default function BackgroundEffect() {
  return (
    <div className="ambient-background" aria-hidden="true">
      {/* Subtle blueprint grid */}
      <div className="bg-grid-layer" />
      {/* Gentle ambient light highlights */}
      <div className="ambient-glow glow-top" />
      <div className="ambient-glow glow-bottom" />
    </div>
  );
}
