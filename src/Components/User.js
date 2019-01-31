import React, { Component } from 'react'
import * as api from './api'
import { BarLoader } from 'react-css-loaders'
import usericon from '../images/usericon.png'
import '../Styles/Users.css'

class User extends Component {
  state = { user: {}, loading: true }
  render () {
    const {
      user: { username, name, avatar_url },
      loading
    } = this.state

    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div>
        <div className='title'>User's profile</div>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <img src={avatar_url} alt={usericon} className='avatar' />
      </div>
    )
  }

  componentDidMount () {
    this.getUser()
  }

  getUser = () => {
    const { author } = this.props
    api
      .fetchUser(author)
      .then(user => {
        this.setState(() => ({
          user,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default User
