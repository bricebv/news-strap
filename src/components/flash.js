import React from 'react'

export class Flash extends React.PureComponent {

  constructor (props) {
    super(props)
  }

  render() {
    const styles = {
      flash: {
        color: '#9D0A0E',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        height: '100%',
        fontSize: '32pt',
        paddingLeft: '1%',
        paddingRight: '1%',
        textTransform: 'uppercase'
      }
    }
    const textFlash = this.props.flash ? this.props.flash : ''
    return (textFlash !== '') ? <div style={styles.flash}>{textFlash}</div> : null
  }
}
