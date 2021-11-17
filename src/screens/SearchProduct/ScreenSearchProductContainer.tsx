import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { productListFetch, productListReset } from '~/redux/ducks/product'

import { selectData } from './screenSearchProductSelector'
import ScreenSearchProductView from './ScreenSearchProductView'

const ScreenSearchProductContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    dispatch(productListFetch({ keyword }))
    return () => {
      dispatch(productListReset())
    }
  }, [])

  const handleSearch = () => {
    dispatch(productListFetch({ keyword }))
  }

  const newProps = {
    ...dataState,
    handleSearch,
    keyword,
    setKeyword,
  }

  return <ScreenSearchProductView {...newProps} />
}

export default ScreenSearchProductContainer
