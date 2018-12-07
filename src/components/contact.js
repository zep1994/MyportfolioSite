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
             style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            I love coding and spend just about all day coding. I learned that my creativity
            and desire to innovate was rooted in computers. Everything I could think of involved
            a piece of software one way or another. I started with php and when I got into
            Flatiron School I learned Ruby on Rails and JavaScript which are now my favorite work
            with. I then got into React, which this website was built with. I am currently attending Flatiron
            School and will be done this December. I will begin looking for a job as Junior Web Developer.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
               <List>
                 <ListItem>
                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                     <i className="fa fa-phone-square" aria-hidden="true"/>
                     (601) 812-8079
                   </ListItemContent>
                 </ListItem>


                 <ListItem>
                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                     <i className="fab fa-github" aria-hidden="true"/>
                     zep1994
                   </ListItemContent>
                 </ListItem>

                 <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      thomasmatlockbba@gmail.com
                    </ListItemContent>
                  </ListItem>

                 <ListItem>
                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                     <i className="fab fa-twitter" aria-hidden="true"/>
                     @SnaxBags
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
