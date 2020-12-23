import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainRouter } from './src/navigations';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
