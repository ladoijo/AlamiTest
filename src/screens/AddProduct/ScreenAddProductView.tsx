import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Button from '~/components/Button'
import Container from '~/components/Container'
import TextInput from '~/components/TextInput'
import colors from '~/theme/colors'

import type { PropsFromSelector } from './screenAddProductSelector'

const styles = StyleSheet.create({
  textInput: {
    marginTop: 12,
  },
  button: {
    height: 45,
    marginTop: 12,
  },
})

export interface ProductProps {
  sellerId: number
  nama: string
  satuan: string
  hargaSatuan: number
  deskripsi: string
}

interface ViewProps extends PropsFromSelector {
  handleChange: (key: string, value: string | number) => void
  handleSave: () => void
  isAddButtonDisabled: boolean
  product: ProductProps
}

const ScreenAddSellerView = ({
  handleChange,
  handleSave,
  isAddButtonDisabled,
  isLoading,
  product,
}: ViewProps) => {
  return (
    <Container isLoading={isLoading}>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => handleChange('sellerId', +value)}
        value={`${product.sellerId ? product.sellerId : ''}`}
        placeholder="ID Penjual"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => handleChange('nama', value)}
        value={product.nama}
        placeholder="Nama"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => handleChange('satuan', value)}
        value={product.satuan}
        placeholder="Satuan"
        style={styles.textInput}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => handleChange('hargaSatuan', +value)}
        value={`${product.hargaSatuan ? product.hargaSatuan : ''}`}
        placeholder="Harga Satuan"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => handleChange('deskripsi', value)}
        value={product.deskripsi}
        placeholder="Deskripsi"
        style={styles.textInput}
        multiline
        numberOfLines={5}
      />
      <Button style={styles.button} onPress={handleSave} disabled={isAddButtonDisabled}>
        <Text style={{ color: colors.white }}>Tambah</Text>
      </Button>
    </Container>
  )
}

export default ScreenAddSellerView
