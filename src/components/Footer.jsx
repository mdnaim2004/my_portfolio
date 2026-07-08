function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Md Naim Babu</p>
        <p>Designed for recruiters, collaborators, and research opportunities.</p>
      </div>
    </footer>
  )
}

export default Footer
