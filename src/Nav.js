
import { Link } from 'react-router-dom'


export default function Nav() {

    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item"><Link to={`/`} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={`/about`} className="nav-link">About</Link></li>
                <li className="nav-item"><Link to={`/articles`} className="nav-link">Articles</Link></li>
                <li className="nav-item"><Link to={`/runways`} className="nav-link">On the Runway</Link></li>
                <li className="nav-item"><Link to={`/news`} className="nav-link">News</Link></li>
            </ul>
        </nav>
    )
}