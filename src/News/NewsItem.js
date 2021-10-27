
import { useParams } from "react-router-dom"

export default function NewsItem(props) {

    console.log(props)

    const newsList = props.newsList

    const { index } = useParams()

    const news = newsList[index]

    return(
        <div className="newswrapper">
            <div className="newshead">
                <h1 className="titlecolouring">{news.title}</h1>
                <img src={news.img}  className="news-head-img" alt="news" />
                <span><p>{news.imgspan}</p></span>
            </div>
            <div className="textwrapper">
                <h3 className="minortitlecolouring">{news.newsHeading1}</h3>
                {news.paragraphs.map(paragraph => 
                    <p>{paragraph}</p>
                )}
            </div>
        </div>
    )
}
