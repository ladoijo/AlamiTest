import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Button from '~/components/Button'
import Container from '~/components/Container'
import TextInput from '~/components/TextInput'
import colors from '~/theme/colors'

import type { PropsFromSelector } from './screenAddSellerSelector'

const styles = StyleSheet.create({
  textInput: {
    marginTop: 12,
  },
  button: {
    height: 45,
    marginTop: 12,
  },
})

export interface SellerProps {
  nama: string
  kota: string
}

interface ViewProps extends PropsFromSelector {
  handleChange: (key: string, value: string) => void
  handleSave: () => void
  isSaveButtonDisabled: boolean
  seller: SellerProps
}

const ScreenAddSellerView = ({
  handleChange,
  handleSave,
  isSaveButtonDisabled,
  isLoading,
  seller,
}: ViewProps) => {
  return (
    <Container isLoading={isLoading}>
      <TextInput
        onChangeText={(value) => handleChange('nama', value)}
        value={seller.nama}
        placeholder="Nama Penjual"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => handleChange('kota', value)}
        value={seller.kota}
        placeholder="Kota"
        style={styles.textInput}
      />
      <Button style={styles.button} onPress={handleSave} disabled={isSaveButtonDisabled}>
        <Text style={{ color: colors.white }}>Simpan</Text>
      </Button>
    </Container>
  )
}

export default ScreenAddSellerView
