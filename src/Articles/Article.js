
import { useParams } from "react-router-dom"

export default function Article(props) {

    const articles = props.articleList 



    const { index } = useParams()



    const article = articles[index]

    

    return(
        <div className ="articlewrapper">
            <div className="articlehead">
                <h1>{article.title}</h1>
                <img className="article-head-img" src={article.img} alt="head"></img>
                <span><p>{article.imgspan}</p></span>
            </div>
            <div className="textwrapper">
                <h3>{article.articleHeading1}</h3>
                <p>{article.paragraph1}</p>
                <p>{article.paragraph2}</p>
            </div>
        </div>
    )

}