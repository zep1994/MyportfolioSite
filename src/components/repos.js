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
    if(this.state.username) {
      user = <div className="repo">
        <p className="rep">{this.state.username}<br />
           {this.state.id}<br />
           {this.state.url}<br />
        </p>
        <img src={this.state.avatar_url} />
      </div>
    }
    return (
      <div>
        <h3>Repositories</h3>
        <form className="forminput" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref="username" placeholder="username" />
        </form>
        {user}
      </div>
    )
  }
}

export default Repositories
