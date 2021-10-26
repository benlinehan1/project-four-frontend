import { useParams } from "react-router-dom";

export default function RunwayItem(props) {

    const runwayList = props.runwayList

    const { index } = useParams()

    const runway = runwayList[index]

    return(
        <div className="runwaywrapper">
            <div className="runwayhead">
                <h1>{runway.title}</h1>
                <img src={runway.img} className="runway-head-img" alt="runway" />
                <span><p>{runway.imgspan}</p></span>
            </div>
            <div className="textwrapper">
                <h3>{runway.runwayHeading1}</h3>
                <p>{runway.paragraph1}</p>
                <p>{runway.paragraph2}</p>
            </div>
        </div>
    )
}