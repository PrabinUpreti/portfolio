import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <i>
                {" "}
                <b className="purple"> Hello everyone, </b>
              </i>
              <br></br> I am a passionate web developer with four years of
              experience in Javascript. I have used Angular, Laravel, NodeJS,
              React, React Native, GraphQL, ExpressJS etc to develop different
              Desktop and cross-platform mobile application. On the database
              side, I have worked on MySQL, Firebase and MongoDB. Here are my
              some pet project in Angular and Laravel. Interned/Worked at
              SoftWeb Developers company in Laboratory Management System. In
              this Software, I learned the following things... <br></br>--Web
              Designing
              <br></br>--Working on SQL Database <br></br>--Problem Solving{" "}
              <br></br>--Git and GitHub
              <br></br>--Teamwork and project/code Merging <br></br>
              --Authentication and Multi-user validation <br></br>--Developing
              project in a modular pattern
              <br></br>--API integration etc... <br></br>Academically, I am an
              Electronics and Communication Engineering Student. Here I am
              working on Firmware designing, RTOS, ESP32, STM32, PCB designing,
              BLE, LoRa etc. I build an IoT based home automation project in the
              third Semester. In this project, I got the chance to learn the
              following things...
              <br></br>--Working on Arduino, <br></br>--Working on ESP8266 WiFi
              Module <br></br>--Working on TCP Protocol <br></br>--Firmware
              Flashing <br></br>--HTTP Request, DHCP to static, IoT Security,
              Database integration etc... <br></br>
              <i>
                <b className="purple">Thank you! </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">DevOps, AWS, Data Science.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PrabinUpreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/prabinrajupreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prabinrajupreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prabin_upreti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
