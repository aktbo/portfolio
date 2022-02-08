import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* new css animation */}
      <div className="gradient-border" id="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="p-con">
        <p id="text-s">
          My name is Aaron Thibeaux, I am a full-time web developer and learner.
        </p>
        <p>
          I was working on a web application for a local company and learned
          their stack quickly and efficiently. I’m passionate about technology -
          not a specific framework or language. In this line of work it's about
          adaptation, and what works best for the project. I’m open to learning
          any stack if it works.
        </p>

        <p>
          My motto as a developer is if I am the smartest person in the room, I
          am in the wrong room. I love learning, and want to become the best
          developer I can be. I am a maker, I enjoy creating In my career and
          after hours. I believe in shipping quality code and working in flow.
        </p>
        <p>
          I have experience with peer code reviews, mentoring and pair coding
          sessions. I also have experience with tedious refactoring, and entire
          re- writes of applications, large and small scale.
        </p>
        <p>I have a history working in a remote environment.</p>
        <p>
          I care deeply about the code I write and the effect my work has on the
          product. I enjoy interaction with clients and seeing the joy they get
          when they get the application they’ve been wanting.
        </p>
        <p>
          I would love to one day be a Fullstack developer, however I have done
          most of my work on the front end. I enjoy working with the back end as
          well, and making sure everything works as it should.
        </p>
        <p>
          That said - I think I align with what you’re doing and believe I would
          be a great fit technology and culture wise. If I’m not a perfect match
          for this position I am open to other positions that may better fit
          qualifications.
        </p>
        <p id="text-e">
          Looking forward to hearing back
          <br /> Kind Regards,
          <br /> Aaron Thibeaux
        </p>
      </div>
    </div>
  );
};

export default About;
