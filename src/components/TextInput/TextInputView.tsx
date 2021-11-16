import React from 'react'
import { StyleSheet, TextInput } from "react-native"
import type { TextInputProps } from "react-native"

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderColor: '#dddddd',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

const ButtonView = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.textInput}
      {...props}
    />
  )
}

export default ButtonView
