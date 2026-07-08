function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      <div className="glow-blob blob-one" />
      <div className="glow-blob blob-two" />
      <div className="glow-blob blob-three" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(2,6,23,0.78)_70%)]" />
    </div>
  )
}

export default BackgroundEffects
