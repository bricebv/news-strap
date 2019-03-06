import React from 'react'

export class Clock extends React.PureComponent {

  constructor (props) {
    super(props)
  }

  render() {
    const styles = {
      clock: {
        fontSize: '3Opt',
        marginLeft: '3%',
        marginRight: '1%',
        maxHeight: '38pt',
        lineHeight: '32pt'
      }

    }
    return <div style={styles.clock}>{this.props.time}</div>
  }
}
