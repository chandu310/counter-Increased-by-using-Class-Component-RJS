// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div>
          <h1 className="head">
            The Button has been clicked
            <br />
            <span>{count}</span> times
          </h1>
          <div className="second-cont">
            <p className="para">click the button to increase the count</p>
            <button onClick={this.onIncrement} className="button" type="button">
              Click Me
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
