export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">Home</a>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
    </ul>
  </nav>
}