import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="data:image/jpeg;base64,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"
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
