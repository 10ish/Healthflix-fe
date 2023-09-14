import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <Carousel  className="carousel" controls={false} fade>
        <Carousel.Item interval={3000}>
          <Image
            src="https://images.unsplash.com/photo-1498116069452-debf99cb30f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            fluid
            className="w-100 d-block carousel-img "
          />
          <Carousel.Caption className="carousel-caption">
            <h1>Healthflix Medical</h1>
            <h5>Right Staff Right Now</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image
            src="https://images.unsplash.com/photo-1498116069452-debf99cb30f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            fluid
            className="w-100 d-block carousel-img"
          />
          <Carousel.Caption  className="carousel-caption" >
            <h3>We serve you exactly what you need</h3>
            <p>
              Greenstaff Medical is a global healthcare staffing agency with
              strong recruitment capabilities worldwide. Our network of branches
              is in the US, Canada, UK, South Africa, India, Ireland, Australia,
              China and Philippines.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image
            src="https://images.unsplash.com/photo-1498116069452-debf99cb30f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            fluid
            className="w-100 d-block carousel-img"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Your staffing needs, Fulfilled here!</h3>
            <p>
              Greenstaff Medical US is a leading provider of healthcare staffing
              services in the United States since 2017. Our mission is to
              deliver high-quality healthcare professionals across the country,
              when you need it, where you need it. Because we know the care you
              provide to your patients is your primary interest, we guarantee
              the best staffing service is made available to you 24/7.tur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

