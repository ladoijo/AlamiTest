import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { ParamListBase } from '@react-navigation/routers'
import type { StackScreenProps } from '@react-navigation/stack'

import { sellerCreate } from '~/redux/ducks/seller'

import { selectData } from './screenAddSellerSelector'
import ScreenAddSellerView from './ScreenAddSellerView'

type NavigationProps = StackScreenProps<ParamListBase>

interface SellerProps {
  nama: string
  kota: string
}

const DEFAULT_SELLER_VALUE = {
  nama: '',
  kota: '',
}

const ScreenAddSellerContainer = ({ navigation }: NavigationProps) => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const { isLoading } = dataState
  const [seller, setSeller] = useState<SellerProps>(DEFAULT_SELLER_VALUE)

  console.log({ isLoading })
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
    handleChange,
    handleSave,
    seller,
  }

  return <ScreenAddSellerView {...newProps} />
}

export default ScreenAddSellerContainer
