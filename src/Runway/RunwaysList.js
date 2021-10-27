import { Link } from "react-router-dom"


export default function RunwaysList(props) {

    const runways = props.runways
    return(
        <main className="runway-list-container">
            <h3 className="titlecolouring">Recent Runway's.</h3>
        {runways.map((runway, index) => <article>
            <img className="runway-list-img" src={runway.img} alt="runway-elem" />
            <Link className="link" to={`/runway/${index}`}><h4 className="minortitlecolouring" key={index}>{runway.title}</h4></Link>
        </article>)}
        </main>
    )
}