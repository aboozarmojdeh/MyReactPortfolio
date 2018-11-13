import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="./img/AboozarMojdeh.jpg"
                alt="Aboozar Mojdeh"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Aboozar Mojdeh</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              distinctio repudiandae alias porro beatae recusandae minus quas
              asperiores dolor incidunt, placeat.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>9471 yonge street</p>
            <h5>Phone</h5>
            <p>647-989-5563</p>
            <h5>Email</h5>
            <p>aboozar.mojdeh@gmail.com</p>
            <h5>Web</h5>
            <p>http://webyouweb.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h1>Education</h1>
            <Education
              startYear={2012}
              endYear={2018}
              schoolName={"UofT"}
              schoolDescription={
                "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
              }
            />

            <Education
              startYear={2012}
              endYear={2018}
              schoolName={"UofT"}
              schoolDescription={
                "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2018}
              jobName={"Freelance"}
              jobDescription={
                "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
              }
            />
            <Experience
              startYear={2012}
              endYear={2018}
              jobName={"Freelance"}
              jobDescription={
                "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"Javascript"} progress={80} />
            <Skills skill={"React"} progress={40} />
            <Skills skill={"NodeJs"} progress={60} />
            <Skills skill={"HTML/ CSS"} progress={90} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
