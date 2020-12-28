import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function ControledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.first_img_src}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.second_img_src}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.third_img_src}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControledCarousel;