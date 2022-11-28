import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabin Upreti </span>
            from <span className="purple"> Hetauda, Nepal.</span>
            <br />I am an BE.Elex&Comm Student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Thinking Capacity can only increases when you start to think"{" "}
          </p>
          <footer className="blockquote-footer">Prabin U.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
