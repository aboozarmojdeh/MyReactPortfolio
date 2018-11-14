import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";


class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="./img/Aboozar-Mojdeh.png"
              alt="Aboozar Mojdeh"
              style={{borderRadius:'50%', border:'2px solid white',height:'200px', marginTop:'5em'}}
              
            />
            <div className="banner-text">
            <h3>I'm Aboozar Mojdeh</h3>
              <h5>Full Stack Web Developer</h5>
              
              <hr />
              <p>
                HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB |
                MySQL
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aboozar-mojdeh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                 {/* Github */}
                 <a
                  href="https://github.com/aboozarmojdeh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                 {/* Youtube */}
                 <a
                  href="https://www.youtube.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
