
import { Link } from 'react-router-dom'


export default function Nav() {

    return (
        <nav className="nav-bar">           
                <Link className="nav-item" to={`/`} >Home</Link>
                <Link className="nav-item" to={`/about`}>About</Link>
                <Link className="nav-item" to={`/articles`}>Articles</Link>
                <Link className="nav-item" to={`/runways`}>On the Runway</Link>
                <Link className="nav-item" to={`/news`} >News</Link>
            <div className="dot"></div>
        </nav>


    )
}