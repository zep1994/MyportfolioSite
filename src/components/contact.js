import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Thomas Matlock</h2>
            <img
              src="http://icons-for-free.com/free-icons/png/512/628290.png"
              alt="avatar"
              className="imgav"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Full stack web developer spending my days learning how I learn.
              There are a lot technologies out there, but how do I go about learning the most 
              effective and efficient way? I love Ruby and JavaScript, in particular, using a 
              Rails backend with a React front end. For state management, I love Redux. I have 
              a couple of projects in React VR that are a blast to work on. I love virtual Reality.  
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (601) 812-8079
                    </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fab fa-github" aria-hidden="true" />
                    zep1994
                    </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    thomasmatlockbba@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fab fa-twitter" aria-hidden="true" />
                    @_ThomasMatlock
                    </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
