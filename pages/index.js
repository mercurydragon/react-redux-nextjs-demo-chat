import Link from 'next/link'
import React, {Component} from 'react'
import configureStore from '../store/configureStore'
import Head from 'next/head'
import Header from '../containers/Header'
import Messages from '../containers/Messages'
import Footer from '../containers/Footer'
import {addMessage, createSocket, setName} from './ActionReducers'
import withRedux from 'next-redux-wrapper'

import io from 'socket.io-client'

class Page extends Component {
  sendMessage (ev, socket, author) {
    socket.emit('SEND_MESSAGE', {
      id: Date.now() + author.id,
      author: author,
      text: ev
    })
  }
  constructor (props) {
    super(props)
    const socket = io('localhost:8080')
    socket.on('RECEIVE_MESSAGE', function (data) {
      props.addMessage(data)
    })
    this.props.createSocket(socket)
  }

  static getInitialProps ({store, isServer, pathname, query}) {
    // store.dispatch({type: 'FOO', payload: 'foo'}) // component will be able to read from store's state when rendered
    // const socket = io('localhost:8080')
    // return {socket: socket} // you can pass some custom props to component from here
  }

  render () {
    return (
      // <Provider store={store}>
      <div className='app'>
        <Head>
          <title>Chat</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' href='/static/styles.css' />
        </Head>
        <Header />
        <Messages />
        <Footer sendMessage ={this.sendMessage} socket={this.props.socket} setName={this.props.setName}/>
      </div>
      // </Provider>
    )
  }
}

const mapDispatchToProps = {
  addMessage,
  createSocket,
  setName
}

export default withRedux(configureStore, (state) => ({...state.chat}), mapDispatchToProps)(Page)
