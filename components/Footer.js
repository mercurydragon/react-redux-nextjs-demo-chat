import React from 'react'

const NameForm = ({clients, setName}) => (
  <form className='name-form' action='javascript:' onSubmit={({target: {name}}) => setName(name.value)} >
    <input type='text' autoComplete='off' name='name' placeholder='Enter your name' autoFocus required />
    <button type='submit'>Start</button>
  </form>
)

const MessageForm = ({sendMessage, socket, author}) => (
  <form className='message-form' action='javascript:' onSubmit={({target: {text}}) => {
    if (text.value) {
      sendMessage(text.value, socket, author)
      text.value = ''
    }
  }}>
    <input autoComplete='off' name='text' placeholder='Enter message ...' autoFocus required />
    <button type='submit'>Send</button>
  </form>
)

const Footer = ({sendMessage, socket, setName, name, me}) => {
  return (
    <footer>
      { !me.name ? <NameForm setName={setName} /> : null }
      <MessageForm sendMessage={sendMessage} socket={socket} author={me}/>
    </footer>
  )
}

export default Footer
