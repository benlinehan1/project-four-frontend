import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import { Component } from 'react'
import ArticleList from './Articles/ArticleList.js';
import Footer from './Footer.js';
import RunwaysList from './Runway/RunwaysList.js';
import Carousel from './Homepage/Carousel.js';
import HotPosts from './Homepage/HotPosts';
import HomepageEntries from './Homepage/HomepageEntries';
import AboutPage from './AboutPage.js';
import NewsList from './News/NewsList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  
  constructor() {
    super()

    this.state = {
      articles: [
        {
          title: "Schiaparelli's Revolutionary Take on Surrealism Fashion",
          img: "https://media.tatler.com/photos/6141cf0e970aecd0f140bb49/3:2/w_1920,h_1280,c_limit/schiaparelli_hcfw2122_look_13_daniel_roseberry-square.jpg"
        },
        {
          title: "Placeholder 2",
          img: "https://i.pinimg.com/736x/b7/0e/4c/b70e4cb04116e63119347167e7f8a310--chartreuse-dress-podium.jpg"
        },
        {
          title: "Placeholder 3",
          img: "https://via.placeholder.com/500x250"
        },
      ],
      runways: [
        {
          title: "Placeholder 1",
          img: "https://via.placeholder.com/500x250"
        },
        {
          title: "Placeholder 2",
          img: "https://via.placeholder.com/500x250"
        },
        {
          title: "Placeholder 3",
          img: "https://via.placeholder.com/500x250"
        },
      ],
      news: [
        {
          title: "Placeholder 1",
          img: "https://via.placeholder.com/500x250"
        },
        {
          title: "Placeholder 2",
          img: "https://via.placeholder.com/500x250"
        },
        {
          title: "Placeholder 3",
          img: "https://via.placeholder.com/500x250"
        },
      ]
    }
  }
  
  render() {
      return (
      <div className="App">
        <header>
          <h1>Bennethy's Good Ones</h1>
        </header>
          <Nav />
            
      <Switch>
        
        <Route path="/articles">
          <ArticleList articles={this.state.articles}/>
        </Route>
        <Route path="/runways">
          <RunwaysList runways={this.state.runways}/>
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/news">
          <NewsList news={this.state.news}/>
        </Route>
        <Route path="/">
          <h3>Featured Posts</h3>
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
