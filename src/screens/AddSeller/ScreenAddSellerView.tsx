import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '~/components/Button'
import Container from '~/components/Container'
import TextInput from '~/components/TextInput'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#23ab96',
    height: 50,
    justifyContent: 'center',
  },
});

export interface SellerProps {
  nama: string
  kota: string
}

interface ViewProps {
  handleChange: (key: string, value: string) => void
  handleSave: () => void
  seller: SellerProps
}

const ScreenAddSellerView = ({ handleChange, handleSave, seller }: ViewProps) => {
  return (
    <Container>
      <TextInput
        onChangeText={(value) => handleChange('nama', value)}
        value={seller.nama}
        placeholder="Nama Penjual"
      />
      <TextInput
        onChangeText={(value) => handleChange('kota', value)}
        value={seller.kota}
        placeholder="Kota"
      />
      <Button style={styles.button} onPress={handleSave} disabled={!seller.nama || !seller.kota}>
        <Text style={{ color: '#fff' }}>Simpan</Text>
      </Button>
    </Container>
  )
}

export default ScreenAddSellerView
