import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/">About</Link> |{' '}
      <Link to="/projects">Projects</Link> |{' '}
      <Link to="/experience">Experience</Link> |{' '}
    </nav>
  );
}
