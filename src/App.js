import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import { Component } from 'react'
import ArticleList from './Articles/ArticleList.js';
import Footer from './Footer.js';
import RunwaysList from './Runway/RunwaysList.js';
import Carousel from './Homepage/Carousel.js';
import HomepageEntries from './Homepage/HomepageEntries';
import AboutPage from './AboutPage.js';
import NewsList from './News/NewsList.js';
import Article from './Articles/Article.js';
import NewsItem from './News/NewsItem.js';
import RunwayItem from './Runway/RunwayItem.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import articles from './ArticlesData.js';
class App extends Component {
  
  constructor() {
    super()

    this.state = articles
  }
  
  render() {
      return (
      <div className="App">
        <header>
          <h1 className="pagetitle">Bennethy's Good Ones</h1>
        </header>
          <Nav />
            
      <Switch>
        
        <Route path="/articles">
          <ArticleList articles={this.state.articles}/>
        </Route>
        <Route path="/article/:index">
          <Article articleList={this.state.articles}/>
        </Route>
        <Route path="/runways">
          <RunwaysList runways={this.state.runways}/>
        </Route>
        <Route path="/runway/:index">
          <RunwayItem runwayList={this.state.runways}/>
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/news">
          <NewsList news={this.state.news}/>
        </Route>
        <Route path="/news/:index">
          <NewsItem newsList={this.state.news}/>
        </Route>
        <Route path="/">
          <h3 className="featuredposts">Featured Posts:</h3>
          <Carousel />
          
            <HomepageEntries />
            {/* <HotPosts /> */}
        </Route>


        

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
