// message ={
//   id,
//   author,
//   text
// }

export const ADD_MESSAGE = 'chat/ADD_MESSAGE'
export const CREATE_SOCKET = 'chat/CREATE_SOCKET'
export const SET_NAME = 'chat/SET_NAME'

export const chatInitialState = {
  socket: {},
  clients: [],
  messages: [],
  me: {}
}

export function chatReducer (state = chatInitialState, action = {}) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMsg]
      }
    case CREATE_SOCKET:
      return {
        ...state,
        socket: action.socket
      }
    case SET_NAME:
      return {
        ...state,
        me: {id: Date.now() + action.name, name: action.name}
      }
    default:
      return state
  }
}

export function addMessage (newMsg) {
  return {
    type: ADD_MESSAGE,
    newMsg: newMsg
  }
}

export function createSocket (socket) {
  return {
    type: CREATE_SOCKET,
    socket: socket
  }
}

export function setName (name) {
  return {
    type: SET_NAME,
    name: name
  }
}
