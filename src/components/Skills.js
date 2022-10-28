import React from 'react'
import { Container,Row , Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";  
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    
      <section className='skill' id='skill'>
      <Container>
        <Row>
            <Col>
        <div className='skill-bx'>
        <h1 className=' '>Skills</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <Carousel responsive={responsive} infinite={true} className="skill-slider">
          <div className='item'>
            <img src={meter1} alt=''/>
            <h2>Web Development</h2>
            </div>

            <div className='item'>
            <img src={meter2} alt=''/>
            <h2>Brand Identity</h2>
            </div>

            <div className='item'>
            <img src={meter3} alt=''/>
            <h2>Logo Design</h2>
             </div>

            <div className='item'>
            <img src={meter1} alt=''/>
            <h2>UI/UX Designer</h2>
            </div>
        </Carousel>
        
        </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt=""/>
      </section>
    
  )
}

export default Skills
