import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_I from "../../assets/img/experience/intersec.svg";
import L_S from "../../assets/img/experience/sss.jfif";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
    return (
      <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 5 }}>
              <Card >
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  <Card.Img variant="top" className="img-resize" src={L_I} alt="InterSec logo" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">Cyber Business Development Associate</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "></strong>
                      
                      <strong>Duration:</strong> May 2021 - Present
                      <br/>
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Guide</strong> clients to ensure proper implementation and enforcement of CMMC standards</li>
                        <li><strong>Produce</strong> sample security assessments to provide clients aid in preparing for CMMC certification
                        </li>
                        <li><strong>Create</strong>  informational resources such as user guides to support user experience 
                        </li>
                        
                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
  
                      </ul>
                      
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
          </Jumbotron>
          <br>
          </br>
          <br>
          </br>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 5 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  <Card.Img variant="top" className="img-resize" src={L_I} alt="InterSec logo" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">Junior Security Analyst Intern</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "></strong>
                      
                      <strong>Duration:</strong> May 2020 - February 2021
                      <br/>
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Developed </strong>Java programs to automate data management and upload processes which reduced working hours from 8 hours to 10 minutes per task</li>
                        <li><strong>Created</strong> educational presentation of CMMC background for potential clients
                        </li>
                        <li><strong>Increased</strong> clients by 60% through online marketing and product presentations to directly engage with prospective customers 
                        </li>
                        
                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
  
                      </ul>
                      
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
          <br>
          </br>
          <br>
          </br>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 5 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  <Card.Img variant="top" className="img-resize" src={L_S} alt="Stem exCEL logo" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">Programming Instructor</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style "></strong>
                      
                      <strong>Duration:</strong> December 2019 - March 2020
                      <br/>
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li><strong>Coordinated </strong>lesson plans consisting of fundamental programming concepts for 20+ students</li>
                        <li><strong>Engaged and motivated</strong> students new to programming 
                        </li>
                        <li><strong>Instructed</strong> students on data structures  (arrays and linked lists)
                        </li>
                        
                        {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
  
                      </ul>
                      
                      
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Experience;