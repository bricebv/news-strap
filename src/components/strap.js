import React from 'react'
// Components
import { Clock } from './clock'
import { Ticker } from './ticker'
import { Flash } from './flash'
// Styles
import '../css/animations.css'
import '../fonts/fonts.css'
// Assets
import bbcLogo from '../images/BBC_logo_white.svg'

export class Strap extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    const styles = {
      strap: {
        backgroundColor: '#9D0A0E',
        width: '100%',
        position: 'absolute',
        bottom: '38pt',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'space-between',
        height: '38pt',
        fontSize: '38pt',
        fontFamily: 'Helvetica Neue',
        color: '#FFF'
      },
      logo: {
        marginLeft: '10%',
        height: '32pt'
      },
      bbcNews: {
        fontFamily: 'BBC Reith Light',
        fontSize: '32pt',
        marginLeft: '1%'
      }

    }
    const time = this.props.time
    return (
      <div style={styles.strap}>
        <img src={bbcLogo} style={styles.logo} />
        <div style={styles.bbcNews}>NEWS</div>
        {this.props.clock && <Clock time={time}></Clock>}
        {this.props.flash.display && <Flash flash={this.props.flash.text}></Flash>}
        {this.props.ticker.display && <Ticker text={this.props.ticker.text} stepSize={1.5}></Ticker>}
      </div>
    )
  }
}
