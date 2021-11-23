import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '~/components/Button'
import Container from '~/components/Container'
import TableSeller from '~/components/Table/TableSeller'
import TextInput from '~/components/TextInput'
import colors from '~/theme/colors'

import type { PropsFromSelector } from './screenDetailSellerSelector'

const styles = StyleSheet.create({
  filterContainer: {
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
  handleFilter: () => void
  isFilterButtonDisabled: boolean
  sellerId: number
  setSellerId: (sellerId: number) => void
}

const ScreenDetailSellerView = ({
  handleFilter,
  isFilterButtonDisabled,
  isLoading,
  seller,
  sellerId,
  setSellerId,
}: ViewProps) => {
  return (
    <Container isLoading={isLoading}>
      <View style={styles.filterContainer}>
        <TextInput
          keyboardType="numeric"
          onChangeText={(value) => setSellerId(+value)}
          value={`${sellerId ? sellerId : ''}`}
          placeholder="ID Penjual"
          style={styles.textInput}
        />
        <Button style={styles.button} onPress={handleFilter} disabled={isFilterButtonDisabled}>
          <Text style={{ color: colors.white }}>Filter</Text>
        </Button>
      </View>
      <TableSeller sellers={seller.id ? [seller] : []} />
    </Container>
  )
}

export default ScreenDetailSellerView
