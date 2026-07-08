function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-300">{description}</p>
    </div>
  )
}

export default SectionHeading
