import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '~/components/Button'
import Container from '~/components/Container'
import TableProduct from '~/components/Table/TableProduct'
import TextInput from '~/components/TextInput'
import colors from '~/theme/colors'

import type { PropsFromSelector } from './screenSearchProductSelector'

const styles = StyleSheet.create({
  keywordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  textInput: {
    width: '80%',
    marginTop: 12,
  },
  button: {
    width: '18%',
    height: 45,
    marginTop: 12,
  },
})

interface ViewProps extends PropsFromSelector {
  handleSearch: () => void
  keyword: string
  setKeyword: (keyword: string) => void
}

const ScreenSearchProductView = ({
  handleSearch,
  isLoading,
  products,
  keyword,
  setKeyword,
}: ViewProps) => {
  return (
    <Container isLoading={isLoading}>
      <View style={styles.keywordContainer}>
        <TextInput
          onChangeText={(value) => setKeyword(value)}
          value={keyword}
          placeholder="Nama Produk"
          style={styles.textInput}
        />
        <Button style={styles.button} onPress={handleSearch}>
          <Text style={{ color: colors.white }}>Cari</Text>
        </Button>
      </View>
      <TableProduct products={products} />
    </Container>
  )
}

export default ScreenSearchProductView
