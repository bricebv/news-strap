import React from 'react'
// Styles
import '../css/ticker.css'

export class Ticker extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      step: 0,
      tickerText: 0,
      tickerOuter: 0
    }
    this.tickerOuter = React.createRef()
    this.tickerText = React.createRef()
  }

  componentDidMount = () => {
    this.setState({
      step: this.tickerOuter.current.getBoundingClientRect().width
    })
    this.startLoop()
  }

  componentWillUnmount = () => {
    this.stopLoop()
  }

  startLoop = () => {
    if (!this._frameId) {
      this._frameId = window.requestAnimationFrame(this.loop.bind(this))
    }
  }

  loop = () => {
    let step = ((this.state.step - this.props.stepSize) < (0-this.tickerText.current.getBoundingClientRect().width)) ? this.tickerOuter.current.getBoundingClientRect().width : this.state.step - this.props.stepSize
    this.setState({step})
    this._frameId = window.requestAnimationFrame(this.loop.bind(this))
  }

  stopLoop = () => {
    window.cancelAnimationFrame(this._frameId)
  }

  render() {
    const styles = {
      ticker: {
        paddingLeft: '1%',
        paddingRight: '1%',
        fontWeight: 'normal',
        width: '100%',
        overflow: 'hidden',
        maxHeight: '38pt',
        lineHeight: '32pt',
        fontSize: '30pt'
      },
      text: {
        display: 'inline-block',
        position: 'relative',
        left: this.state.step + 'px',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase'
      }
    }
    return (
      <div
        style={styles.ticker}
        ref={this.tickerOuter}
      >
        <span
          ref={this.tickerText}
          style={styles.text}
        >
        {this.props.text}
        </span>
      </div>
    )
  }
}
