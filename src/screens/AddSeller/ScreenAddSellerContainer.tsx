import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { sellerCreate } from '~/redux/ducks/seller'

import { selectData } from './screenAddSellerSelector'
import ScreenAddSellerView from './ScreenAddSellerView'
import type { SellerProps } from './ScreenAddSellerView'

const DEFAULT_SELLER_VALUE = {
  nama: '',
  kota: '',
}

const ScreenAddSellerContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const [seller, setSeller] = useState<SellerProps>(DEFAULT_SELLER_VALUE)
  const isSaveButtonDisabled = !seller.nama || !seller.kota

  const handleChange = (key: string, value: string) => {
    setSeller({
      ...seller,
      [key]: value,
    })
  }

  const handleSave = () => {
    dispatch(sellerCreate(seller))
  }

  const newProps = {
    ...dataState,
    handleChange,
    handleSave,
    isSaveButtonDisabled,
    seller,
  }

  return <ScreenAddSellerView {...newProps} />
}

export default ScreenAddSellerContainer
