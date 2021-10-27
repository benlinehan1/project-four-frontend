
import { Link } from "react-router-dom"


export default function NewsList(props) {

    const newsList = props.news

    return(
        <main className="news-list-wrapper">
            <h3 className="titlecolouring">Recent News Articles.</h3>
            {newsList.map((news, index) => <article>
                <img className="news-list-img" src={news.img} alt="news-elem" />
                <Link className="link" to={`/news/${index}`}><h4 className="minortitlecolouring" key={index}>{news.title}</h4></Link>
            </article>)}
        </main>
    )
}