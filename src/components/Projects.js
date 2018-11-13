import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  state = {
    activeTab: 0
  };

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <Grid className="projects-grid">
          {/* first card */}
          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                  style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="https://google.com" target="blank" colored>
                  Github
                </Button>
                <Button href="https://google.com" target="blank" colored>
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

 {/* second card */}
 <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
               
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="https://google.com" target="blank" colored>
                  Github
                </Button>
                <Button href="https://google.com" target="blank" colored>
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
           {/* third card */}
           <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="https://google.com" target="blank" colored>
                  Github
                </Button>
                <Button href="https://google.com" target="blank" colored>
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
           {/* fourth card */}
           <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                
                style={{
                  color: "black",
                  height: "176px",
                  background:
                    "url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button href="https://google.com" target="blank" colored>
                  Github
                </Button>
                <Button href="https://google.com" target="blank" colored>
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
         
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>MongoDB Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>MySQL Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Firebase Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>NodeJS/ Express Projects</h1>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>API/ AJAX</h1>
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div>
          <h1>WordPress</h1>
        </div>
      );
    } else if (this.state.activeTab === 7) {
      return (
        <div>
          <h1>Show All</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          tabBarProps
          ripple
        >
          <Tab>MERN</Tab>
          <Tab>MongoDB</Tab>
          <Tab>MySQL</Tab>
          <Tab>Firebase</Tab>
          <Tab>NodeJS/ Express</Tab>
          <Tab>API/ AJAX</Tab>
          <Tab>WordPress</Tab>
          <Tab>Show all</Tab>
        </Tabs>
        {this.toggleCategories()}
      </div>
    );
  }
}

export default Projects;
