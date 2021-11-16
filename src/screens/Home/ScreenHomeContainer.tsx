import React from 'react';
import type { ParamListBase } from '@react-navigation/routers'
import type { StackScreenProps } from '@react-navigation/stack'

import ScreenHomeView from './ScreenHomeView'

type NavigationProps = StackScreenProps<ParamListBase>

const ScreenHomeContainer = ({ navigation }: NavigationProps) => {
  const handleNavigateTo = (screenName: string) => {
    navigation.navigate(screenName)
  }

  const newProps = {
    handleNavigateTo,
  }

  return <ScreenHomeView {...newProps} />
}

export default ScreenHomeContainer
