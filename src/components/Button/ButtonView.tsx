import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import type { TouchableOpacityProps } from "react-native"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

interface ViewProps extends TouchableOpacityProps {
  title?: string
}

const ButtonView = ({ children, style, title, onPress, ...otherProps }: ViewProps) => {
  const styleButton = style || styles.button
  const titleButton = title || 'Press'
  return (
    <TouchableOpacity
      {...otherProps}
      style={styleButton}
      onPress={onPress}
    >
      {children || <Text>{titleButton}</Text>}
    </TouchableOpacity>
  )
}

export default ButtonView
