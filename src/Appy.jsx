import FriendsList from './FriendsList'
import React from 'react';


class Appy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: ['Jordyn', 'Mikenzi', 'Jake'],
      input: '',
    }

    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.handleAddFriend = this.handleAddFriend.bind(this)
    
  }

  handleAddFriend() {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([currentState.input]),
        input: '',
      }
      
    })
  }

  handleRemoveFriend(name) {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend !== name)
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
    return (
      <div>
        <input 
          type="text" 
          placeholder="new friend" 
          value={this.state.input} 
          onChange={this.updateInput}>
        </input>
        <button onClick={this.handleAddFriend}>Submit</button>
        <FriendsList 
          list={this.state.friends}
          onRemoveFriend={this.handleRemoveFriend}
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