import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C5603AQHUQeyZOzzb6g/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=tsawIMXrTWmAu_wlQ0eRL65tTfrqPvxaTsBl3mwXDvA"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Ruby on Rails | JavaScript | React | Redux | NodeJS | Bootstrap</p>
              <div className="social-links">

                <a href="https://github.com/zep1994" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square" aria-hidden="true" />
                </a>

                <a href="https://www.linkedin.com/in/twmatlock/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://www.youtube.com/channel/UCAZV8spZCznfG4I79EQxb1g" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>

                <a href="https://twitter.com/_ThomasMatlock" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
