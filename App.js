/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//  import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';


const App = () => {
  
  return (
<NavigationContainer>
  <StatusBar backgroundColor={"#333"} barStyle={"light-content"}/>
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
