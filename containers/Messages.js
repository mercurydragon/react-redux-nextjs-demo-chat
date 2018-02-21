import {connect} from 'react-redux'
import Messages from '../components/Messages'

const mapStateToProps = (state) => ({
  messages: state.chat.messages.map(message => ({
    ...message,
    isMine: message.author.id === state.chat.me.id
  })).reverse()
})

export default connect(mapStateToProps)(Messages)
