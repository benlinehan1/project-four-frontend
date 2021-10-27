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
import CarouselLV from './Runway/RunwayCarouselLV.js';
import CarouselSxF from './Runway/CarouselSxF.js';
import CarouselBalenciaga from './Runway/CarouselBalenciaga.js';
class App extends Component {
  
  constructor() {
    super()

    this.state = {
      articles: [
        {
          title: "Schiaparelli's Revolutionary Take on Surrealism Fashion",
          img: "https://media.tatler.com/photos/6141cf0e970aecd0f140bb49/3:2/w_1920,h_1280,c_limit/schiaparelli_hcfw2122_look_13_daniel_roseberry-square.jpg",
          imgspan: "Model Rouguy Faye in Schiaparelli Fall 2021 Couture.",
          articleHeading1: "The History of this Iconic House.",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
        {
          title: "Colours I believe are against the Geneva Convention",
          img: "https://i.pinimg.com/736x/b7/0e/4c/b70e4cb04116e63119347167e7f8a310--chartreuse-dress-podium.jpg",
          imgspan: "Chartreuse being displayed on the runway.",
          articleHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
        {
          title: "The Return of the Mullet: Dark days ahead? Or the herald of a modern fashionista's dream?",
          img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/miley-cyrus-short-mullet-1600430107.jpg",
          imgspan: "Miley Cyrus's mullet, an example of the new fashion wave.",
          articleHeading1: "Placeholder",
          paragraphs: ["I'm baby fixie tote bag mixtape kale chips, salvia fam meditation. DIY woke next level, XOXO locavore jianbing try-hard taxidermy lomo vegan. Edison bulb franzen tumeric unicorn, banh mi waistcoat hot chicken trust fund narwhal post-ironic fanny pack. Readymade squid austin letterpress, jean shorts gochujang organic authentic. Whatever pop-up hell of hammock, four loko austin fingerstache 90's artisan semiotics vice umami. Pug tacos banh mi XOXO vinyl tbh. Pitchfork shoreditch whatever bitters, seitan raclette enamel pin vaporware next level wayfarers venmo.",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
      ],
      runways: [
        {
          title: "Louis Vuitton Spring 2022 Ready to Wear",
          img: "https://graziamagazine.com/wp-content/uploads/2021/10/GettyImages-1345021711.jpg?resize=1024%2C682",
          imgspan: "Model Ida Heiner walking for Louis Vuitton, displaying a garment from their Spring 2022 Ready to Wear Collection.",
          runwayHeading1: "An Analysis of Louis Vuitton's recent runway:",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"],
          carousel: <CarouselLV />
        },
        {
          title: "Savage x Fenty Show",
          img: "https://hollywoodlife.com/wp-content/uploads/2021/09/normani-savage-fenty-vol-3-embed11.jpg",
          imgspan: "Normani performing at the Savage x Fenty show.",
          runwayHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"],
          carousel: <CarouselSxF />
        },
        {
          title: "Balenciaga Spring 2022 Ready to Wear",
          img: "https://i.ytimg.com/vi/w4g8-vtHIHE/maxresdefault.jpg",
          imgspan: "Artist Eliza Douglas presenting a gown inspired by drag artist 'Divine' during Balenciaga's Spring 2022 Ready to Wear runway.",
          runwayHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"],
          carousel: <CarouselBalenciaga />
        },
      ],
      news: [
        {
          title: "Grimes and Elon: The uncoventional couple of the year call it quits.",
          img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614df67cfd35362d32a2a153%2F0x0.jpg%3FcropX1%3D217%26cropX2%3D3000%26cropY1%3D99%26cropY2%3D1664",
          imgspan: "Grimes and their former partner Elon at the MET Gala.",
          newsHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
        {
          title: "Charli XCX's triumphant return to the mainstream.",
          img: "https://pyxis.nymag.com/v1/imgs/e19/a11/d13edea0f6ca4e70e924f465eb756b7ff9-charli-xcx-good-ones.jpg",
          imgspan: "Charli XCX in her most recent music video.",
          newsHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
        {
          title: "Azaelia Banks: Incredible Rapstress and Social Commentary voice we need in 2021?",
          img: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/GettyImages-170197939_czvere/azealia-banks-elon-musk-song-yung-rapunxel-2-alon-dust-execution.jpg",
          imgspan: "Azaelia Banks performing.",
          newsHeading1: "Placeholder",
          paragraphs: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, repellendus? Corporis magni in a iste provident cum rem, qui aut eligendi culpa ex, quos tempore suscipit facere. Repudiandae, minus nesciunt?",
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit laborum beatae saepe fugit sed odio ea vel! Rerum, quia! Reiciendis consequatur doloremque quos recusandae porro quia possimus et in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam veniam recusandae soluta optio natus. Asperiores quo, ad assumenda laborum fuga reiciendis rem eos laudantium inventore hic provident, doloribus optio!"]
        },
      ]
    }
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
