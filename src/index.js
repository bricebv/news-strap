import ReactDOM from 'react-dom'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Strap } from './components/strap'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      strapDisplayed: false,
      time: '00:00',
      displayClock: false,
      ticker: {
        display: true,
        text: ''
      },
      flash: {
        display: false,
        text: 'Breaking News'
      }
    }

  }

  leftTab = (action, time, ticker) => {
    time ? time : false
    action ? action : 'off'
    ticker ? ticker : false
    if(action === 'on'){
      (this.state.strapDisplayed !== true) ? this.setState({strapDisplayed: true}) : ''
      if(time) {
        this.setState({displayClock: true})
        this.setState({time})
      }
      if(ticker) this.setState({ticker:{display: true, text: 'This is an example of Ticker Text'}})
    }else if(action === 'off'){
      this.setState({strapDisplayed: false})
    }else if(action === 'tickerOff'){
      this.setState({ticker:{display: false, text:''}})
    }else if(action === 'bnews'){
      this.setState({flash: {
        display: time,
        text: 'Breaking News'
      }})
    }
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="strap"
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.state.strapDisplayed &&
          <Strap
            clock={this.state.displayClock}
            time={this.state.time}
            flash={this.state.flash}
            ticker={this.state.ticker}>
          </Strap>}
      </ReactCSSTransitionGroup>
    )
  }
}

const strapApp = ReactDOM.render(<App />, document.getElementById('app'))

window.leftTab = strapApp.leftTab
