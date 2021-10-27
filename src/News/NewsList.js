
import { Link } from "react-router-dom"


export default function NewsList(props) {

    const newsList = props.news

    return(
        <main className="news-list-wrapper">
            <h3>Recent News Articles.</h3>
            {newsList.map((news, index) => <article>
                <img className="news-list-img" src={news.img} alt="news-elem" />
                <Link className="link" to={`/news/${index}`}><h3 key={index}>{news.title}</h3></Link>
            </article>)}
        </main>
    )
}