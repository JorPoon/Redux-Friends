import React from 'react';
import {connect} from 'react-redux'
import {getFriends} from '../actions'
import Friend from './Friend'

class FriendsList extends React.Component {
    constructor() {
        super();
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {this.props.friends.map(friend => { 
                return <Friend friend={friend} key={friend.id} />   
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
  
})

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  {}
)
(FriendsList);