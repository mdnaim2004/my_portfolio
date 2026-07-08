function Footer() {
  return (
    <footer className="theme-footer border-t py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="theme-muted">© {new Date().getFullYear()} Md Naim Babu</p>
        <p className="theme-muted">Designed for recruiters, collaborators, and research opportunities.</p>
      </div>
    </footer>
  )
}

export default Footer
