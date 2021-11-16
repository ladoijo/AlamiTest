import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AddProduct from '~/screens/AddProduct'
import AddSeller from '~/screens/AddSeller'
import Home from '~/screens/Home'
import ListProduct from '~/screens/ListProduct'
import SearchProduct from '~/screens/SearchProduct'

type RootStackParamList = {
  AddProduct: undefined
  AddSeller: undefined
  Home: undefined
  ListProduct: undefined
  SearchProduct: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack = () => (
  <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerStyle: { elevation: 0 },
      cardStyle: { backgroundColor: '#fff' }
    }}
  >
    <Stack.Screen options={{ title: 'Tambah Produk' }} name='AddProduct' component={AddProduct} />
    <Stack.Screen options={{ title: 'Tambah Penjual' }} name='AddSeller' component={AddSeller} />
    <Stack.Screen options={{ title: 'Beranda' }} name='Home' component={Home} />
    <Stack.Screen options={{ title: 'Daftar Produk' }} name='ListProduct' component={ListProduct} />
    <Stack.Screen options={{ title: 'Cari Produk' }} name='SearchProduct' component={SearchProduct} />
  </Stack.Navigator>
)

export default RootStack
