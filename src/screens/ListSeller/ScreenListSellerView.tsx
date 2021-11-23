import React from 'react'
import { StyleSheet } from 'react-native'

import Container from '~/components/Container'
import TableSeller from '~/components/Table/TableSeller'

import type { PropsFromSelector } from './screenListSellerSelector'

const ScreenListSellerView = ({ isLoading, sellers }: PropsFromSelector) => {
  return (
    <Container isLoading={isLoading}>
      <TableSeller sellers={sellers} />
    </Container>
  )
}

export default ScreenListSellerView
