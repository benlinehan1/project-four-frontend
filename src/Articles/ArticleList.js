// import { Children } from "react"
import { Link } from "react-router-dom"

export default function ArticleList(props) {

    const articles = props.articles

    
    return(
        <main className="article-wrapper">     
        <h3>Recent Article's.</h3>
            {articles.map((article, index) => <article>
                <img className="article-listimg" src={article.img} alt="placeholder"/>
                <Link className="link" to={`/article/${index}` }><h3 key={index}>{article.title}</h3></Link>
            </article>)}


        </main>
    )
}