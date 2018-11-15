import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Let me introduce myself.</h2>
            <img
              src="./img/AboozarMojdeh.jpg"
              alt="Aboozar Mojdeh"
              style={{ height: "200px", borderRadius: "5%" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                textAlign: "left"
              }}
            >
              
            </p>
          </Cell>
          <Cell col={6}>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                textAlign: "left"
              }}
            >
              Full Stack Web Developer able to build a sophisticated website
              with full database backend all the way from mockup to rollout.
              Adept at working with diverse teams to implement projects with an
              interest in the front-end of applications using React. A team
              leader in previous career who coordinated and managed an
              engineering team to fulfill company requirements. Started
              programming as one of{" "}
              <a
                style={{ color: "blue" }}
                href="https://www.trilogyed.com/blog/university-of-toronto-coding-boot-camp-review-aboozar-mojdeh/"
                target="_blank" rel='noopener noreferrer'
              >
                core-value dreams
              </a>{" "}
              since childhood, and recently rekindled this passion.
            </p>

            <hr />

            <p
              style={{
                width: "75%",
                margin: "auto",
                // paddingTop: "1em",
                textAlign: "left"
              }}
            >
              There is nothing greater than making new websites and debugging
              and coding for companies or individuals to help them run their
              business on web, and it’s a fantastic process that I feel lucky to
              participate in. When I’m not coding, I am usually with my lovely
              wife, who loves shopping, sports and watching movies even more
              than I do. I am very much a kid at heart, love to gardening,
              practicing AIKIDO, play video games, and astronomy.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
