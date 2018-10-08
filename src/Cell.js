import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    let color = this.props.setColorSelection()
    this.setState({ color })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
