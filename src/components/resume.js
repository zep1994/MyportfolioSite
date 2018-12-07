import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="http://icons-for-free.com/free-icons/png/512/628290.png"
                alt="avatar"
                className="avatar-img"
                style={{height: '300px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Thomas Matlock</h2>
            <h2 style={{color: 'grey'}}>Programmer</h2>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I
                </p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>Jackson, MS</p>
              <h5>Phone</h5>
              <p>601-812-8079</p>
              <h5>Email</h5>
              <p>thomasmatlockbba@gmail.com</p>
              <h5>Web</h5>
              <p>thomasmatlock.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2018}
              schoolName="University of Mississippi"
              schoolDescription="Bachelor of Business Administration"
             />

             <Education
               startYear={2017}
               endYear={2018}
               schoolName="Flatiron School"
               schoolDescription="Full Stack Web Development"
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2>Experience</h2>

              <Experience
                startYear={2015}
                endYear={2015}
                jobName="Management Trainee - Enterprise Rent a Car"
                jobDescription = "Management Trainee"
              />

              <Experience
                startYear={2015}
                endYear={2015}
                jobName="Teacher Assistant - University of Mississippi"
                jobDescription = "Management Trainee"
              />

              <Experience
                startYear={2016}
                endYear={2018}
                jobName="Web Development"
                jobDescription = "Management Trainee"
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2>Skills</h2>

              <Skills
                skill="JavaScript"
                progress={50}
              />

              <Skills
                skill="Ruby"
                progress={80}
              />

              <Skills
                skill="Rails"
                progress={70}
              />

              <Skills
                skill="React"
                progress={40}
              />

              <Skills
                skill="HTML/CSS"
                progress={95}
              />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
