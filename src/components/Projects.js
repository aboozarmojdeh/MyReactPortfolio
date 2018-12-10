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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background:"url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                There is so much waste in our day-to-day lives and so many
                people that require basic items. We want to connect them to
                those that want to help but unsure how to proceed...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/finalproject"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://wallofkindness.herokuapp.com/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/NYT-react.png) center / cover"
                }}
              >
                NYTimes
              </CardTitle>
              <CardText>
                This is a MERN full stack application that searches the New York
                Times article search API, and allows users to save articles for
                their future purposes...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/nytreact"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://nyt-search-react-aboozar.herokuapp.com/"
                  target="blank"
                  colored
                >
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
        <Grid className="projects-grid">
          {/* first card */}
          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "white",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/astronomy-news.png) center / cover"
                }}
              >
                Astronomy News
              </CardTitle>
              <CardText>
                A web app that lets users view and leave comments on the latest
                news of Astronomy. Whenever a user visits site, the app scrape
                stories from a news outlet of astronomy...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/astronomy-news"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://astronomynews.herokuapp.com/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/lostandfound.png) center / cover"
                }}
              >
                Lost and Found
              </CardTitle>
              <CardText>
                This is an online platform that stores data on lost and found
                items. Users fill out form requests to list a new item they’ve
                lost or an item they’ve found that needs to be returned...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/pathak-neha/Project2"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://lostandfound-fullstack.herokuapp.com/"
                  target="blank"
                  colored
                >
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
    } else if (this.state.activeTab === 2) {
      return (
        <Grid className="projects-grid">
          {/* first card */}
          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/plan-my-night.png) center / cover"
                }}
              >
                Plan My Night
              </CardTitle>
              <CardText>
                A web app that lets users plan a night or day after reach to
                Toronto. The app will make all plan day arrangement for user and
                map each location who desired to be visited...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akinwol/projectone"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://aboozarmojdeh.github.io/Bootcamp-Project1/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/Train.png) center / cover"
                }}
              >
                Train Activity
              </CardTitle>
              <CardText>
                Train activity web application allows the user to set times for
                the train. User is able to select and set train time schedules
                and check what time next train will arrive...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/Train_Activity"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://aboozarmojdeh.github.io/Train_Activity/"
                  target="blank"
                  colored
                >
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
    } else if (this.state.activeTab === 3) {
      return (
        <Grid className="projects-grid">
          {/* first card */}
          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/Tahchin-food.png) center / cover"
                }}
              >
                Tahchin Food
              </CardTitle>
              <CardText>
                Website for booking, reservation and food order placement...
              </CardText>
              <CardActions border>
                <Button
                  href="https://www.tahchinfood.ca/"
                  target="blank"
                  colored
                >
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
                  color: "white",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/irmeiseikai.png) center / cover"
                }}
              >
                AIKIDO Federation
              </CardTitle>
              <CardText>
                Website for registration and managing the AIKIDO martial
                artists...
              </CardText>
              <CardActions border>
                <Button
                  href="http://www.irmeiseikai.com/en/"
                  target="blank"
                  colored
                >
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
    } else if (this.state.activeTab === 4) {
      return (
        <Grid className="projects-grid">
          {/* first card */}
          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background:
                    "url(./img/MERN-wallofkindness.png) center / cover"
                }}
              >
                Wall of Kindness
              </CardTitle>
              <CardText>
                There is so much waste in our day-to-day lives and so many
                people that require basic items. We want to connect them to
                those that want to help but unsure how to proceed...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/finalproject"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://wallofkindness.herokuapp.com/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/NYT-react.png) center / cover"
                }}
              >
                NYTimes
              </CardTitle>
              <CardText>
                This is a MERN full stack application that searches the New York
                Times article search API, and allows users to save articles for
                their future purposes...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/nytreact"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://nyt-search-react-aboozar.herokuapp.com/"
                  target="blank"
                  colored
                >
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "white",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/astronomy-news.png) center / cover"
                }}
              >
                Astronomy News
              </CardTitle>
              <CardText>
                A web app that lets users view and leave comments on the latest
                news of Astronomy. Whenever a user visits site, the app scrape
                stories from a news outlet of astronomy...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/astronomy-news"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://astronomynews.herokuapp.com/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/lostandfound.png) center / cover"
                }}
              >
                Lost and Found
              </CardTitle>
              <CardText>
                This is an online platform that stores data on lost and found
                items. Users fill out form requests to list a new item they’ve
                lost or an item they’ve found that needs to be returned...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/pathak-neha/Project2"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://lostandfound-fullstack.herokuapp.com/"
                  target="blank"
                  colored
                >
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/plan-my-night.png) center / cover"
                }}
              >
                Plan My Night
              </CardTitle>
              <CardText>
              A web app that lets users plan a night or day out in Toronto. The app will plan all arrangements for the user and map each location they desire visit...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/akinwol/projectone"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://aboozarmojdeh.github.io/Bootcamp-Project1/"
                  target="blank"
                  colored
                >
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
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/Train.png) center / cover"
                }}
              >
                Train Activity
              </CardTitle>
              <CardText>
                Train activity web application allows the user to set times for
                the train. User is able to select and set train time schedules
                and check what time next train will arrive...
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/aboozarmojdeh/Train_Activity"
                  target="blank"
                  colored
                >
                  Github
                </Button>
                <Button
                  href="https://aboozarmojdeh.github.io/Train_Activity/"
                  target="blank"
                  colored
                >
                  Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card" shadow={5}>
              <CardTitle
                style={{
                  color: "#b30000",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/Tahchin-food.png) center / cover"
                }}
              >
                Tahchin Food
              </CardTitle>
              <CardText>
                Website for booking, reservation and food order placement...
              </CardText>
              <CardActions border>
                <Button
                  href="https://www.tahchinfood.ca/"
                  target="blank"
                  colored
                >
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
                  color: "white",
                  textTransform:'uppercase',
                  height: "176px",
                  background: "url(./img/irmeiseikai.png) center / cover"
                }}
              >
                AIKIDO Federation
              </CardTitle>
              <CardText>
                Website for registration and managing the AIKIDO martial
                artists...
              </CardText>
              <CardActions border>
                <Button
                  href="http://www.irmeiseikai.com/en/"
                  target="blank"
                  colored
                >
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
          <Tab style={{color:'white', fontWeight:'bold', textTransform:'none'}}>MERN</Tab>
          <Tab style={{color:'white', fontWeight:'bold', textTransform:'none'}}>MongoDB/ MySQL</Tab>
          <Tab style={{color:'white', fontWeight:'bold', textTransform:'none'}}>Firebase</Tab>
          <Tab style={{color:'white', fontWeight:'bold', textTransform:'none'}}>WordPress</Tab>
          <Tab style={{color:'white', fontWeight:'bold', textTransform:'none'}}>Show all</Tab>
        </Tabs>
        {this.toggleCategories()}
      </div>
    );
  }
}

export default Projects;
