import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Aboozar Mojdeh</h2>
            <img
              src="./img/AboozarMojdeh.jpg"
              alt="Aboozar Mojdeh"
              style={{ height: "200px", borderRadius: "5%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I love meeting new people and learning new things, so please feel
              free to say hello and share a story with me. I am thrilled, and
              truly loved to be helpful to all people and I am aspired to coach others.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    647-989-5563
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton",color:"#dc4c40" }}
                  >
                    <i className="fa fa-google" aria-hidden="true" />
                    aboozar.mojdeh@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px", fontFamily: "anton",color:"blue" }}
                  >
                   <a style={{ fontSize: "22px", fontFamily: "anton",color:"#0077b5" }}
                  href="https://www.linkedin.com/in/aboozar-mojdeh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                  www.linkedin.com/in/aboozar-mojdeh</a>
                 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "anton" }}
                  >
                   <a style={{ fontSize: "22px", fontFamily: "anton",color:"black" }}
                  href="https://github.com/aboozarmojdeh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                  https://github.com/aboozarmojdeh</a>
                    {/* <i className="fa fa-github" aria-hidden="true" />
                    https://github.com/aboozarmojdeh */}
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
