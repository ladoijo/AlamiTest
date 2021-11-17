import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Container from '~/components/Container'
import Button from '~/components/Button'

import colors from '~/theme/colors'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    height: 100,
    marginBottom: 12,
    width: '45%',
  },
  buttonText: {
    color: colors.white,
  },
})

interface ViewProps {
  handleNavigateTo: (screenName: string) => void
}

const ScreenHomeView = ({ handleNavigateTo }: ViewProps) => {
  return (
    <Container style={styles.container}>
      <View style={styles.menuContainer}>
        <Button style={styles.button} onPress={() => handleNavigateTo('AddSeller')}>
          <Text style={styles.buttonText}>Tambah Penjual</Text>
        </Button>
        <Button style={styles.button} onPress={() => handleNavigateTo('AddProduct')}>
          <Text style={styles.buttonText}>Tambah Produk</Text>
        </Button>
      </View>
      <View style={styles.menuContainer}>
        <Button style={styles.button} onPress={() => handleNavigateTo('ListProduct')}>
          <Text style={styles.buttonText}>Daftar Produk</Text>
        </Button>
        <Button style={styles.button} onPress={() => handleNavigateTo('SearchProduct')}>
          <Text style={styles.buttonText}>Cari Produk</Text>
        </Button>
      </View>
    </Container>
  )
}

export default ScreenHomeView
