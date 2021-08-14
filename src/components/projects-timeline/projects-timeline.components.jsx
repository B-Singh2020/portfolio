import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, themes, createTheme } from "@merc/react-timeline";

// projects
import L_hack from "../../assets/img/projects/hack1.JPG";
import L_Vid from "../../assets/img/projects/vidifypic.JPG";
import L_shell from "../../assets/img/projects/shell.JPG";
import L_Quiz from "../../assets/img/projects/QuizApp.JPG";
import L_LPC from "../../assets/img/projects/lpc.JPG";
import L_KNN from "../../assets/img/projects/KNN.JPG";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_C from "../../assets/img/skills/c-program.svg";
import L_Cs from "../../assets/img/skills/csharp.jpg";
import L_JS from "../../assets/img/skills/javascript.svg";
import L_Java from "../../assets/img/skills/java.svg";
import L_Python from "../../assets/img/skills/python.svg";
import L_asp from "../../assets/img/skills/asp.jfif";
import Image from "react-bootstrap/Image";
import L_Heroku from "../../assets/img/skills/heroku.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_as from "../../assets/img/skills/as.png";


import "./projects-timeline.styles.css";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#ffc13b',
  },
  marker: {
    borderColor: '#ffc13b',
  },
  timelineTrack: {
    backgroundColor: '#ffc13b',
  },
  UrlButton:
  {
    backgroundColor: '#ffc13b',
  },
});



const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
        {/* Project: hackathon */}

        <ImageEvent
            date="10/21/2019"
            className="text-center"
            text="Real-Time Object Identification using Machine Learning"
            src={L_hack}
            alt="Real-Time Object Identification using Machine Learning"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This project uses Darkflow object detection and FaceAPI to perform facial recognition and object identification in real-time.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Identifies objects using Darknet, an open source neural network framework written in C</li>
                          <li>Implements FaceAPI in a Javascript program to perform facial recognition and identify emotions based on facial expressions</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JS}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="C"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C
                            </span>
                          </li>

                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton 
                  href="https://devpost.com/software/real-time-object-identification-using-machine-learning"
                  target="_blank" 
                  
                >
                  View Devpost
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


 {/* Project: Shell Program */}
 <ImageEvent
            date="10/30/2019"
            className="text-center"
            text="Shell Program"
            src={L_shell}
            alt="Shell Program"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Basic shell program that takes arguments and creates processes.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Parses user arguments to perform specific functions</li>
                          <li>Creates foreground and background processes</li>
                          <li>Uses signals to interrupt run-time (CRTL-C to stop execution)</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             C
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
              </div>
            </div>
          </ImageEvent>


{/* Project: Vidify*/}
<ImageEvent
            date="8/3/2020"
            className="text-center"
            text="Vidify Web Platform"
            src={L_Vid}
            alt="Vidify Web Platform"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Vidify is a web app that lets customers register on the platform and see what movies are available to rent. Admin accounts can add/remove movies available on the web app.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register user accounts with different privledges (admin or customer)</li>
                          <li>Create/remove movies from SQL database using Entity Framework</li>
                          <li>Responsive UI to track and search for movie rentals</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Cs}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C#
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_asp}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ASP.NET
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/B-Singh2020/Vidify"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
            
              </div>
            </div>
          </ImageEvent>

         

          {/* Project: Quiz App */}
          <ImageEvent
            date="10/4/2020"
            className="text-center"
            text="Number System Conversion Quiz App"
            src={L_Quiz}
            alt="Number System Conversion Quiz App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An Android app where users can practice conversions between decimal and hexdecimal number systems. Once you are done practicing, you can take a randomized quiz to test your knowledge. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Answer questions on signed and unsigned conversion between decimal and hexdecimal numbers</li>
                          <li>Choose to receive questions in 8, 10, or 12 bits</li>
                          <li>Take a quiz with randomized questions from all possible practice types</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_as}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Android Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Java}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
              </div>
            </div>
          </ImageEvent>

          {/* Project: Logical Predicate Calculator */}

          <ImageEvent
            date="11/29/2020"
            className="text-center"
            text="Logical Predicate Calculator"
            src={L_LPC}
            alt="Logical Predicate Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A web app where a user can construct logical predicates with up to five variables and generate a truth table. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Users can input variable names and logical operators to build a custom logical predicate</li>
                          <li>Create truth tables using desired logical predicate</li>
                          <li>Constructed using Java servlets and hosted on Heroku</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Java}
                                alt="Java"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Heroku}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                                 </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://swe432-servlet2.herokuapp.com/LPC"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: KNN Reviews */}

          <ImageEvent
            date="2/09/2021"
            className="text-center"
            text="Movie Review Sentiment Predictor"
            src={L_KNN}
            alt="Movie Review Sentiment Predictor"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A predictor application that uses 25,000 movie reviews to train a KNN classifier and predict if a movie review is positive or negative. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Preprocesses training data  </li>
                          <li>Uses Cosine similarity to find K closest neighbors and determine sentiment of new review</li>
                          <li>Accuracy score of 74% on predictions</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Python}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              </div>
            </div>
          </ImageEvent>

         
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;