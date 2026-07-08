function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="theme-eyebrow mb-3 text-xs uppercase tracking-[0.35em]">{eyebrow}</p>
      <h2 className="theme-heading text-3xl font-semibold md:text-4xl">{title}</h2>
      <p className="theme-body mt-3">{description}</p>
    </div>
  )
}

export default SectionHeading
