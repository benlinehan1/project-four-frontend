import { Carousel } from "react-bootstrap";
 

export default function CarouselBalenciaga() {


return(
    <div className="carouselSXFwrapper">
    <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/6158d229921f1be26b1fa266/master/w_2240,c_limit/00001-Balenciaga-RTW-Spring22-Paris-credit-brand.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <p>Bronte Coates for Balenciaga's Spring 2022 Ready to Wear collection.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/6158d20ae1536e4001892249/master/w_2240,c_limit/00031-Balenciaga-RTW-Spring22-Paris-credit-brand.jpg"
        alt="Second slide"
        />

        <Carousel.Caption>
        <p>Inti Wang for Balenciaga's Spring 2022 Ready to Wear collection.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/6158d1c2e9d92109e381b1f7/master/w_2240,c_limit/00032-Balenciaga-RTW-Spring22-Paris-credit-brand.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <p>Marie-Agnes Diene for Balenciaga's Spring 2022 Ready to Wear collection.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/6158d2816e41f509195db334/master/w_2240,c_limit/00041-Balenciaga-RTW-Spring22-Paris-credit-brand.jpg"
        alt="Fourth slide"
        />

        <Carousel.Caption>
        <p>Sasha Yatsiuk for Balenciaga's Spring 2022 Ready to Wear collection.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://assets.vogue.com/photos/6158d2556e41f509195db331/master/w_2240,c_limit/00050-Balenciaga-RTW-Spring22-Paris-credit-brand.jpg"
        alt="Fifth slide"
        />

        <Carousel.Caption>
        <p>Elliot Page for Balenciaga's Spring 2022 Ready to Wear collection.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
</div>
)

}