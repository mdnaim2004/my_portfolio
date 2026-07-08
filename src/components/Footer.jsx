function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0' }}>
      <div className="container flex flex-col md-flex-row items-center justify-between gap-2 text-sm text-secondary">
        <p>© {new Date().getFullYear()} Md Naim Babu</p>
        <p>Designed for recruiters, collaborators, and research opportunities.</p>
      </div>
    </footer>
  )
}

export default Footer
