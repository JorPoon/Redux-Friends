import {LOGIN_SUCCESS, GET_FRIENDS, GETTING_FRIENDS} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
    //   case LOGIN_SUCCESS:
    //     return {
    //         ...state,
    //         fetchingFriends: true
    //     }  
    case GETTING_FRIENDS:  
        return {
            ...state,
            fetechingFriends: true
        }
    case GET_FRIENDS:
        return {
            ...state,
            friends: action.payload,
            fetchingFriends: false
        }
      default:
        return state;
    }
  };
  
  export default reducer;