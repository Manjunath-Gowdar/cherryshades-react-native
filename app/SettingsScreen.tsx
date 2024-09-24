import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SettingsScreen
