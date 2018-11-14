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
              truly loved to be helpful for all creature on earth especially in
              human coaching.
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
                    674-989-5563
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-google" aria-hidden="true" />
                    aboozar.mojdeh@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-yahoo" aria-hidden="true" />
                    a_mojdeh@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    https://www.facebook.com/aboozar.mojdeh
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
