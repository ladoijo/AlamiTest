import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import type { ViewProps as RNViewProps } from 'react-native'

import colors from '~/theme/colors'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingHorizontal: 12,
    width: '100%',
  },
  loadingWrapper: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
})

interface ViewProps extends RNViewProps {
  children: React.ReactNode
  isLoading?: boolean
}

const ContainerView = ({ children, isLoading, style }: ViewProps) => (
  <View style={[styles.container, style]}>
    {isLoading ? (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    ) : (
      children
    )}
  </View>
)

export default ContainerView
