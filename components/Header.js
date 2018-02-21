import React from 'react'

const Header = ({name}) => (
  <header>
    <span>{name ? `Hi ${name}!` : ''}</span>
  </header>
)

export default Header
