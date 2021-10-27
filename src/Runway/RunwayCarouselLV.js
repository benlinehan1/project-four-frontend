import { Carousel } from "react-bootstrap";
 

export default function CarouselLV() {


return(
    <div className="carouselLVwrapper">
    <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/615cc59a49fa6719a78c85c6/master/w_2240,c_limit/00002-LouisVuitton-Spring-22-Paris-credit-gorunway.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <p>Raelynn Bumgardner walking for Louis Vuitton.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/615cc5a5050f333b92c9df24/master/w_2240,c_limit/00027-LouisVuitton-Spring-22-Paris-credit-gorunway.jpg"
        alt="Second slide"
        />

        <Carousel.Caption>
        <p>Xavier Downey Silva walking for Louis Vuitton</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/615cc5a5050f333b92c9df27/master/w_2240,c_limit/00029-LouisVuitton-Spring-22-Paris-credit-gorunway.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <p>Miriam Sanchez walking for Louis Vuitton.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/615cc5a6594bb1f9c952f565/master/w_2240,c_limit/00031-LouisVuitton-Spring-22-Paris-credit-gorunway.jpg"
        alt="Fourth slide"
        />

        <Carousel.Caption>
        <p>Loli Bahia walking for Louis Vuitton.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/615cc5a733359e71e8415c28/master/w_2240,c_limit/00035-LouisVuitton-Spring-22-Paris-credit-gorunway.jpg"
        alt="Fifth slide"
        />

        <Carousel.Caption>
        <p>Janet Jumbo walking for Louis Vuitton.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
</div>
)

}