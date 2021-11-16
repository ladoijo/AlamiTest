import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingHorizontal: 12,
    width: '100%',
  },
});

interface ViewProps {
  children: React.ReactNode
}

const ContainerView = ({ children }: ViewProps) => (
  <View style={styles.container}>
    {children}
  </View>
)

export default ContainerView
