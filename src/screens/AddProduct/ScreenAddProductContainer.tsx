import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { productCreate } from '~/redux/ducks/product'

import { selectData } from './screenAddProductSelector'
import ScreenAddProductView from './ScreenAddProductView'
import type { ProductProps } from './ScreenAddProductView'

const DEFAULT_PRODUCT_VALUE = {
  sellerId: 0,
  nama: '',
  satuan: '',
  hargaSatuan: 0,
  deskripsi: '',
}

const ScreenAddProductContainer = () => {
  const dispatch = useDispatch()
  const dataState = useSelector(selectData, shallowEqual)
  const [product, setProduct] = useState<ProductProps>(DEFAULT_PRODUCT_VALUE)
  const isAddButtonDisabled =
    !product.sellerId ||
    !product.nama ||
    !product.satuan ||
    !product.hargaSatuan ||
    !product.deskripsi

  const handleChange = (key: string, value: string | number) => {
    setProduct({
      ...product,
      [key]: value,
    })
  }

  const handleSave = () => {
    dispatch(
      productCreate({
        ...product,
        sellerId: +product.sellerId,
        hargaSatuan: +product.hargaSatuan,
      }),
    )
  }

  const newProps = {
    ...dataState,
    handleChange,
    handleSave,
    isAddButtonDisabled,
    product,
  }

  return <ScreenAddProductView {...newProps} />
}

export default ScreenAddProductContainer
