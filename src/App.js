import React, { Component } from 'react'

import logo from './logo.svg'
import './index.scss'

import SuperList from './SuperList'

const items = [
  { id: 1, name: 'mario' },
  { id: 2, name: 'ciccio' },
  { id: 3, name: 'eva' }
]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} />
        <SuperList items={items} />
      </div>
    )
  }
}
