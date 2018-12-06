import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://pbs.twimg.com/profile_images/857508248647282690/iZmsa9lG_400x400.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Ruby on Rails | JavaScript | React | NodeJS | MongoDB | Bootstrap</p>
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

                <a href="https://twitter.com/Snaxbags" target="_blank" rel="noopener noreferrer">
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
