import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'

import colors from '~/theme/colors'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    padding: 10,
  },
  buttonDisabled: {
    backgroundColor: colors.grey,
  },
})

interface ViewProps extends TouchableOpacityProps {
  title?: string
}

const ButtonView = ({ children, disabled, style, title, onPress, ...otherProps }: ViewProps) => {
  const titleButton = title || 'Press'
  return (
    <TouchableOpacity
      {...otherProps}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style, ...(disabled ? [styles.buttonDisabled] : [])]}
    >
      {children || <Text>{titleButton}</Text>}
    </TouchableOpacity>
  )
}

export default ButtonView
