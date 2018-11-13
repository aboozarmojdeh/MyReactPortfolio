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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              minus numquam hic porro facere officiis amet explicabo illum
              officia id ex, in nisi ratione repellendus quidem laudantium neque
              perspiciatis nobis?
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'anton'}}>
                    <i className='fa fa-phone-square' aria-hidden='true'/>
                    674-989-5563
                  </ListItemContent>
                </ListItem>

                 <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'anton'}}>
                    <i className='fa fa-fax' aria-hidden='true'/>
                    674-989-5563
                  </ListItemContent>
                </ListItem>

                 <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'anton'}}>
                    <i className='fa fa-envelope' aria-hidden='true'/>
                    aboozar.mojdeh@gmail.com
                  </ListItemContent>
                </ListItem>

                 <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'anton'}}>
                    <i className='fa fa-skype' aria-hidden='true'/>
                    MySkypeId
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
