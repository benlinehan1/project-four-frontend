import { Carousel } from "react-bootstrap";

export default function CarouselCreator() {
    return(
        <div className="carousel-wrapper">
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.tatler.com/photos/6141cf0e970aecd0f140bb49/3:2/w_1920,h_1280,c_limit/schiaparelli_hcfw2122_look_13_daniel_roseberry-square.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>My take on Sciaparelli.</h3>
            <p>Bennethy's Good Ones shares an opinionated piece on the Surrealist Fashion House.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://graziamagazine.com/wp-content/uploads/2021/10/GettyImages-1345021711.jpg?resize=1024%2C682"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>LV Spring 2022</h3>
            <p>A runway analysis of Louis Vuitton's icon new ready to wear line.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hollywoodlife.com/wp-content/uploads/2021/09/normani-savage-fenty-vol-3-embed11.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Savage x Fenty</h3>
            <p>A story on the Savage x Fenty runway that broke the internet.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}