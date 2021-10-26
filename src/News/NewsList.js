
import { Link } from "react-router-dom"


export default function NewsList(props) {

    const newsList = props.news

    return(
        <main>
            <h3>Recent News Articles.</h3>
            {newsList.map((news, index) => <article>
                <img src={news.img} alt="news-elem" />
                <Link to={`/news/${news.title}`}><h3 key={index}>{news.title}</h3></Link>
            </article>)}
        </main>
    )
}