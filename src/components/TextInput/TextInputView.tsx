import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import type { TextInputProps } from 'react-native'

import colors from '~/theme/colors'

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderColor: colors.grey,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
})

const ButtonView = ({ style, ...otherProps }: TextInputProps) => {
  return <TextInput style={[styles.textInput, style]} {...otherProps} />
}

export default ButtonView
