import { Link } from "react-router-dom"


export default function RunwaysList(props) {

    const runways = props.runways
    return(
        <main>
            <h3>Recent Runway's.</h3>
        {runways.map((runway, index) => <article>
            <img className="runway-list-img" src={runway.img} alt="runway-elem" />
            <Link className="link" to={`/runway/${index}`}><h3 key={index}>{runway.title}</h3></Link>
        </article>)}
        </main>
    )
}