import React from 'react'
import ReactDOM from 'react-dom'

import { incrementActions } from './actions/app-actions'
import { todoStore } from './stores/count-stores'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: todoStore.getCount()
    }
    this.increment = this.increment.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    todoStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    todoStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      count: todoStore.getCount()
    })
  }

  increment() {
    incrementActions.incrementCount()
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))