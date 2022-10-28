import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from './ProjectCard';

const Projects = () => {
    const project =[
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg1
        },
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg2,
        },
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg3,
        },
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg1,
        },
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg2,
        },
        {
            title :"Bussiness Startup",
            description:"Web & Development",
            imgUrl:projImg3,
        },
    ]
  return (
    <section>
        <Container className='project' id='project'>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container className="projects-tabs" defaultActiveKey="frist">
                <Nav varient="pills" defaultActiveKey="/home" >
                    <Nav.Item>
                        <Nav.Link eventkey="frist" >Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="second" >Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="third" >Tab three</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="frist">
                        <Row>
                            {
                                Projects.map((projrct,index) =>{
                                    return(
                                        <ProjectCard />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='backgroung-image-right' src={colorSharp2} />
      
    </section>
  )
}

export default Projects;
