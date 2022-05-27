import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import RecipesContainer from './src/components/containers/RecipesContainer'
import Header from './src/components/layout/Header'
import AppStack from './src/components/stacks/AppStack'

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Header /> */}
      {/* <RecipesContainer /> */}
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
