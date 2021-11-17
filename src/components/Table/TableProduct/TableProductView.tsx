import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

import type { Product } from '~/redux/ducks/product'
import colors from '~/theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  head: {
    height: 'auto',
    backgroundColor: colors.secondary,
  },
  textHeader: {
    color: colors.white,
  },
  text: {
    margin: 2,
    fontSize: 11,
    color: colors.black,
  },
})

const tableHeaders = ['ID', 'Nama', 'Satuan', 'Harga', 'ID Penjual', 'Deskripsi']

interface ViewProps {
  products: Product[]
}

const TableProductView = ({ products }: ViewProps) => {
  const tableData = products.map((product) => [
    product.id,
    product.nama,
    product.satuan,
    product.hargaSatuan,
    product.sellerId,
    product.deskripsi,
  ])
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={tableHeaders}
          style={styles.head}
          textStyle={{ ...styles.text, ...styles.textHeader }}
        />
      </Table>
      <ScrollView>
        <Table borderStyle={styles.borderStyle}>
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </ScrollView>
    </View>
  )
}

export default TableProductView
