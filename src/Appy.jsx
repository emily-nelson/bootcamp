import FriendsList from './FriendsList'
import React from 'react';


window.API = {
  fetchFriends() {
    return new Promise((res, rej) => {
      const friends = ['Jordyn', 'Mikenzi', 'Jake']
      setTimeout(() => res(friends), 2000)
    })
  }
}


class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Loading'

    }
  }

  componentDidMount() {
    const stopper = 'Loading...'
    console.log('RUNNING')
    this.interval = window.setInterval(() => {
      
      if (this.state.text === stopper) {
        this.setState({text: 'Loading'})
      } else {
        this.setState((currentState) => {
          return {
            text: currentState.text + '.'
          }
        })
      }
    }, 300)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }


  render() {
    return <p>{this.state.text}</p>
  }


}


class Appy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeFriends: [],
      inactiveFriends: [],
      input: '',
      loading: true,
    }

    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.handleAddFriend = this.handleAddFriend.bind(this)
    this.handleDeactivateFriend = this.handleDeactivateFriend.bind(this)
    this.handleActivateFriend = this.handleActivateFriend.bind(this)
    this.handleClearAll = this.handleClearAll.bind(this)

  }

  componentDidMount() {

    window.API.fetchFriends()
      .then((friends) => {
        this.setState({
          activeFriends: friends,
          loading: false,
        })

      })
  }

  handleAddFriend() {
    this.setState((currentState) => {
      return {
        activeFriends: currentState.activeFriends.concat([currentState.input]),
        input: '',
      }

    })
  }

  handleRemoveFriend(name) {
    this.setState((currentState) => {
      return {
        activeFriends: currentState.activeFriends.filter((friend) => friend !== name)
      }
    })
  }

  handleActivateFriend(name) {
    this.setState((currentState) => {
      return {
        inactiveFriends: currentState.inactiveFriends.filter((friend) => friend !== name),
        activeFriends: currentState.activeFriends.concat([name])
      }
    })
  }

  handleDeactivateFriend(name) {
    this.setState((currentState) => {
      return {
        activeFriends: currentState.activeFriends.filter((friend) => friend !== name),
        inactiveFriends: currentState.inactiveFriends.concat([name])
      }
    })
  }

  handleClearAll() {
    this.setState((currentState) => {
      return {
        activeFriends: [],
        inactiveFriends: []
      }

    })
  }

  updateInput(e) {
    const value = e.target.value
    this.setState((currentState) => ({
      input: value
    }))

  }

  render() {

    if (this.state.loading === true) {
      return <Loading />
    }

    return (
      <div>
        <input
          type="text"
          placeholder="new friend"
          value={this.state.input}
          onChange={this.updateInput}>
        </input>
        <button onClick={this.handleAddFriend}>Submit</button>
        <button onClick={this.handleClearAll}>Clear all</button>
        <FriendsList
          activeFriendsList={this.state.activeFriends}
          inactiveFriendsList={this.state.inactiveFriends}
          onRemoveFriend={this.handleRemoveFriend}
          onActivateFriend={this.handleActivateFriend}
          onDeactivateFriend={this.handleDeactivateFriend}
        />
      </div>
    );
  }
}


// function Appy() {
//   const friends = ['Jordyn', 'Mikenzi', 'Jake']

//   return (
//     <div>
//       <FriendsList list={friends} />
//     </div>
//   );
// }

export default Appy