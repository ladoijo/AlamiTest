import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AddProduct from '~/screens/AddProduct'
import AddSeller from '~/screens/AddSeller'
import DetailSeller from '~/screens/DetailSeller'
import Home from '~/screens/Home'
import ListProduct from '~/screens/ListProduct'
import ListSeller from '~/screens/ListSeller'
import SearchProduct from '~/screens/SearchProduct'

import colors from '~/theme/colors'

type RootStackParamList = {
  AddProduct: undefined
  AddSeller: undefined
  DetailSeller: undefined
  Home: undefined
  ListProduct: undefined
  ListSeller: undefined
  SearchProduct: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
        elevation: 0,
      },
      cardStyle: { backgroundColor: colors.white },
    }}
  >
    <Stack.Screen options={{ title: 'Tambah Produk' }} name="AddProduct" component={AddProduct} />
    <Stack.Screen options={{ title: 'Tambah Penjual' }} name="AddSeller" component={AddSeller} />
    <Stack.Screen
      options={{ title: 'Detail Penjual' }}
      name="DetailSeller"
      component={DetailSeller}
    />
    <Stack.Screen options={{ title: 'Beranda' }} name="Home" component={Home} />
    <Stack.Screen options={{ title: 'Daftar Produk' }} name="ListProduct" component={ListProduct} />
    <Stack.Screen options={{ title: 'Daftar Seller' }} name="ListSeller" component={ListSeller} />
    <Stack.Screen
      options={{ title: 'Cari Produk' }}
      name="SearchProduct"
      component={SearchProduct}
    />
  </Stack.Navigator>
)

export default RootStack
