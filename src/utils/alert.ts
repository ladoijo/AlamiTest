import { Alert } from 'react-native'

interface AlertMessageProps {
  type: 'success' | 'error'
  message: string
}

export const show = ({ type, message }: AlertMessageProps) => {
  const title = type === 'success' ? 'Sukses' : 'Gagal'
  return Alert.alert(title, message, [{ text: 'OK', onPress: () => null }])
}
