import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: ""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} setColorSelection={this.setColorSelection}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector  handleColorSelection={this.handleColorSelection}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

  handleColorSelection = (str) => {
    this.setState({color: str})
  }

  setColorSelection = () => {
    return this.state.color
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
