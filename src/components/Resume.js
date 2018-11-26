import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className='resume-body'>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="./img/AboozarMojdeh.jpg"
                alt="Aboozar Mojdeh"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: ".5em", textAlign: "center" }}>
              Aboozar Mojdeh
            </h2>
           
            {/* <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4> */}
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p>
              Full Stack Web Developer able to build a sophisticated website
              with full database backend all the way from mockup to rollout.
              Adept at working with diverse teams to implement projects with an
              interest in the front-end of applications using React. A team
              leader in previous career who coordinated and managed an
              engineering team to fulfill company requirements.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Toronto, ON</p>
            <h5>Phone</h5>
            <p>647-989-5563</p>
            <h5>Email</h5>
            <p>aboozar.mojdeh@gmail.com</p>
           
            
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <Button style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} href="./img/AboozarMojdehCV.pdf" target="blank" colored>
                  My CV
                </Button>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Experience</h3>
            <Experience
              startYear={2017}
              endYear={'Present'}
              jobName={"WordPress Developer – Toronto, Canada"}
              jobDescription={
                "Executed WordPress websites for a catering company and Martial arts federation using the WooCommerce open source e-commerce plugin, Instagram FEED, YouTube and google map API, JavaScript, jQuery, CSS3 and HTML5. "
              }
            />
            <Experience
              startYear={2016}
              endYear={2018}
              jobName={"Team leader – IOEC – Tehran, Iran"}
              jobDescription={` Worked as an engineer team leader to run a new project which were awarded from national oil company and needed accurate time management for cost saving.`}
            />
            <Experience
              startYear={2006}
              endYear={2016}
              jobName={"Senior Engineer – Petropars – Tehran, Iran"}
              jobDescription={` Worked as a senior engineer in one of the biggest national Iranian projects for about 10 years. Made technical programs in collaboration with team members. Supervised junior engineers to meet the time planner tasks. Effective communication with team leaders in presenting and reporting the task advancements. `}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h3>Education</h3>
            <Education
              startYear={'March, 2018'}
              endYear={'November, 2018'}
              schoolName={"University of Toronto, Canada "}
              schoolDescription={
                `Full Stack Web Development Bootcamp, An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js.`
              }
            />

            <Education
              startYear={2004}
              endYear={2006}
              schoolName={"University of Tehran, Iran"}
              schoolDescription={
                "MS, Process Engineering (Separation Processes Design)"
              }
            />
            <Education
              startYear={2000}
              endYear={2004}
              schoolName={"University of Mashhad, Iran"}
              schoolDescription={
                "BS, Chemical Engineering (Gas Processes Design)"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h3>Skills</h3>
            {/* <p style={{padding:'1em'}}>HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js, Project Management System(PMS), Material Management System(MMS), Invoicing Management System(IMS), MATLAB Software, Microsoft Offices</p> */}
            <Skills skill={"HTML5/ CSS3"} progress={95} />
            <Skills skill={"JavaScript"} progress={85} />
            <Skills skill={"SQL/ MySQL"} progress={70} />
            <Skills skill={"MongoDB"} progress={70} />
            <Skills skill={"React.js"} progress={60} />
            <Skills skill={"Node.js/ Express"} progress={60} />
            
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
