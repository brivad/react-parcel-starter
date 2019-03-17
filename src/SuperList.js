import React, { Component } from 'react'

export default class SuperList extends Component {
  state = { items: this.props.items }

  updateItem = item => {
    this.setState(state => ({
      items: state.items.map(_item =>
        _item.id === item.id ? { ...item, name: item.name.toUpperCase() } : item
      )
    }))
  }

  render() {
    return (
      <div>
        <h2>Super List</h2>

        {this.state.items.map(item => (
          <div key={item.id} onClick={() => this.updateItem(item)}>
            {item.id} - {item.name}
          </div>
        ))}
      </div>
    )
  }
}
