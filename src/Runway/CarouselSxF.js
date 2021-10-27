import { Carousel } from "react-bootstrap";
 

export default function CarouselSxF() {


return(
    <div className="carouselSXFwrapper">
    <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://media.vogue.co.uk/photos/6149acd75c7a2bb42fbcaad3/2:3/w_1864,h_2796,c_limit/GIGI%20HADID%20SAVAGE%20X%20FENTY%20SHOW%20VOL.3%20(PERFORMANCE%20).JPG"
        alt="First slide"
        />
        <Carousel.Caption>
        <p>Gigi Hadid as seen in the Savage x Fenty runway show.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1341857262.jpg?crop=1xw:1xh;center,top&resize=980:*&keepGifs=1"
        alt="Second slide"
        />

        <Carousel.Caption>
        <p>Vanessa Hudgens on the Savage x Fenty red carpet.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1342184245.jpg?resize=640:*"
        alt="Third slide"
        />

        <Carousel.Caption>
        <p>Madonna's daughter Lourdes Leon as seen in the Savage x Fenty show.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1342184229.jpg?resize=640:*"
        alt="Fourth slide"
        />

        <Carousel.Caption>
        <p>Cindy Crawford as seen in the Savage x Fenty show.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1342182477.jpg?resize=640:*"
        alt="Fifth slide"
        />

        <Carousel.Caption>
        <p>Irina Shayk as seen in the Savage x Fenty show.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
</div>
)

}