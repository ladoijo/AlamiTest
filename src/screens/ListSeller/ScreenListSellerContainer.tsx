import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { sellerListGet } from '~/redux/ducks/seller'

import { selectData } from './screenListSellerSelector'
import ScreenListSellerView from './ScreenListSellerView'

const ScreenListSellerContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)

  useEffect(() => {
    dispatch(sellerListGet())
  }, [])

  const newProps = {
    ...dataState,
  }

  return <ScreenListSellerView {...newProps} />
}

export default ScreenListSellerContainer
