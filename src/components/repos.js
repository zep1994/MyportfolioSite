import React from 'react'

class Repositories extends React.Component {
  constructor() {
    super()
    this.state = {
      username: null,
      id: null,
      url: null,
      avatar_url: null
    }
  }

  getRepos(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response
      })
  }

  async handleSubmit(e) {
    e.preventDefault()
    let user = await this.getRepos(this.refs.username.value)
    this.setState({
      username: user.login,
      id: user.id,
      url: user.url,
      avatar_url: user.avatar_url
    })
  }

  render() {
    let user
    if (this.state.username) {
      user = <div className="repo">
        <p className="rep">{this.state.username}<br />
          <a href={this.state.url}>Git API URL</a><br />
        </p>
        <img alt="git_user" src={this.state.avatar_url} />
      </div>
    }
    return (
      <div className="repo-content">
      <h3>Repositories</h3>
        <div className=" split left">
          <form className="repo-form" onSubmit={e => this.handleSubmit(e)}>
            <input type="text" ref="username" className="repo-input" placeholder="username" />
          </form>
        </div>
        


        <div className="split right">
          <div className="centered">
            {user}
          </div>
        </div>
      </div>
    )
  }
}

export default Repositories
