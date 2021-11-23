import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { sellerDetailGet } from '~/redux/ducks/seller'

import { selectData } from './screenDetailSellerSelector'
import ScreenDetailSellerView from './ScreenDetailSellerView'

const ScreenDetailSellerContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const [sellerId, setSellerId] = useState<number>(0)
  const isFilterButtonDisabled = !sellerId

  const handleFilter = () => {
    dispatch(sellerDetailGet(sellerId))
  }

  const newProps = {
    ...dataState,
    handleFilter,
    isFilterButtonDisabled,
    sellerId,
    setSellerId,
  }

  return <ScreenDetailSellerView {...newProps} />
}

export default ScreenDetailSellerContainer
