import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                {runway.paragraphs.map(paragraph => 
                    <p>{paragraph}</p>
                )}
            </div>
            <h4>Some of Bennethy's Top 'Good Ones' from this Collection:</h4>
            <div className="carouselLV">
                {runway.carousel}
            </div>
        </div>
    )
}