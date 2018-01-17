import React from 'react'
import { Text } from 'react-native'

const MonoText = () => (
  <Text
    {...this.props}
    style={[this.props.style, { fontFamily: 'space-mono' }]}
  />
)

export default MonoText
