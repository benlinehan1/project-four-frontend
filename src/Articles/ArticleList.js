// import { Children } from "react"
import { Link } from "react-router-dom"

export default function ArticleList(props) {

    const articles = props.articles

    
    return(
        <main className="article-list-wrapper">     
        <h3 className="titlecolouring">Recent Articles:</h3>
            {articles.map((article, index) => <article>
                <img className="article-listimg" src={article.img} alt="placeholder"/>
                <Link className="link" to={`/article/${index}` }><h4 className="listtitle" key={index}>{article.title}</h4></Link>
            </article>)}


        </main>
    )
}