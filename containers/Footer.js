import {connect} from 'react-redux'
// import connection from '../connection'
import Footer from '../components/Footer'

// const mapStateToProps = state => ({
//   ...state.chat
// })

const mapStateToProps = state => ({
  me: state.chat.me,
  name: state.chat.me && state.chat.me.name
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
