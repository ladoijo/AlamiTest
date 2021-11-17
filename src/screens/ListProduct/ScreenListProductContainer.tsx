import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { productListFetch, productListReset } from '~/redux/ducks/product'

import { selectData } from './screenListProductSelector'
import ScreenListProductView from './ScreenListProductView'

const ScreenListProductContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const [sellerId, setSellerId] = useState<number>(0)
  const isFilterButtonDisabled = !sellerId

  useEffect(
    () => () => {
      dispatch(productListReset())
    },
    [],
  )

  const handleFilter = () => {
    dispatch(productListFetch({ sellerId }))
  }

  const newProps = {
    ...dataState,
    handleFilter,
    isFilterButtonDisabled,
    sellerId,
    setSellerId,
  }

  return <ScreenListProductView {...newProps} />
}

export default ScreenListProductContainer
