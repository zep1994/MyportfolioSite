import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>CLI DATA GEM</CardTitle>
            <CardText>
              CLI DATA GEM
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/cli-data-gem-v-000" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>TEAM UP</CardTitle>
            <CardText>
              TEAM UP, pair up teams!
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Team-up" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>FLATGRAM</CardTitle>
            <CardText>
              Instagram Clone
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Flatgram" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>RAILS BLOG WITH COMMENTS</CardTitle>
            <CardText>
              This is the description of the project
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Rails_Blog_with_Comments" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>Fortnite Coaching</CardTitle>
            <CardText>
              CONNECT WITH GAMING TEACHERS
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Fortnite_Coaching" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>RAILS BOOK STORE</CardTitle>
            <CardText>
              RAILS BOOK STORE
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Rails_Book_Store" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>RAILS DRINKING GAME API</CardTitle>
            <CardText>
              The API for the drinking game React frontend
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/GamesForDrinkingWithFriends" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>RAILS GITHUB API</CardTitle>
            <CardText>
              FIND USERS FROM GITHUB IN RAILS
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/rails-github-api-v-000" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*sZSVVtdP9TE3mUoGh4GoYA.png) center/ cover' }}>RUBY TIC TAC TOE W/ AI</CardTitle>
            <CardText>
              TTT with AI
          </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/ttt-with-ai-project" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center/ cover' }}>React Project #1</CardTitle>
            <CardText>
              This is the description of the project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Team-up" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center/ cover' }}>React Project #1</CardTitle>
            <CardText>
              This is the description of the project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Team-up" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://avatars3.githubusercontent.com/u/8312?s=400&v=4) center/ cover' }}>React Project #1</CardTitle>
            <CardText>
              This is the description of the project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Team-up" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png) center/ cover' }}>React Project #1</CardTitle>
            <CardText>
              This is the description of the project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/js-tictactoe-rails-api-backend-v-000" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png) center/ cover' }}>React Project #1</CardTitle>
            <CardText>
              This is the description of the project
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/js-tictactoe-rails-api-v-000" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png) center/ cover' }}>Team Up</CardTitle>
            <CardText>
              Connect with Team Mates
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Team-up" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>Weather App</CardTitle>
            <CardText>
              WEATHER APP API
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Weather_app" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>Drinking Game</CardTitle>
            <CardText>
              Social Voting on Drinking Games 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Games_with_Friends_client" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>Burger Builder</CardTitle>
            <CardText>
              Build Burgers with React 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Burger_Builder" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>HackerNews</CardTitle>
            <CardText>
              Pull from HackerNews API 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Hacker_News-React-" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>Fortnite Coaching</CardTitle>
            <CardText>
              Connect with other gamers who want to teach 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/Fortnite_Coaching" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/ cover' }}>React Timer</CardTitle>
            <CardText>
              Just a simple React Timer 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/zep1994/React_timer" target="_blank" rel="noopener noreferrer">Github</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ruby & Ruby on Rails</Tab>
          <Tab>Sinatra</Tab>
          <Tab>Rails & JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
