import React from 'react';
import { StyleSheet } from 'react-native';

import Container from '~/components/Container'
import Button from '~/components/Button'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
  },
});

interface ViewProps {
  handleNavigateTo: (screenName: string) => void
}

const ScreenHomeView = ({ handleNavigateTo }: ViewProps) => {
  return (
    <Container>
      <Button style={styles.button} title='Tambah Penjual' onPress={() => handleNavigateTo('AddSeller')} />
      <Button style={styles.button} title='Tambah Produk' onPress={() => handleNavigateTo('AddProduct')} />
      <Button style={styles.button} title='Daftar Produk' onPress={() => handleNavigateTo('ListProduct')} />
      <Button style={styles.button} title='Cari Produk' onPress={() => handleNavigateTo('SearchProduct')} />
    </Container>
  )
}

export default ScreenHomeView
