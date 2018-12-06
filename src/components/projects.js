import React, { Component } from 'react';
import { Tabs, Tab} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div><h1>Ruby</h1></div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>Sinatra</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>Rails & JavaScript</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div><h1>React</h1></div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ruby CLI</Tab>
          <Tab>Sinatra</Tab>
          <Tab>Rails & JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    )
  }
}

export default Projects;
