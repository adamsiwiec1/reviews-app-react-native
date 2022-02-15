import React, { useState } from 'react';
import Home from './screens/home';
import About from './screens/about';
import Forum from './screens/forum';
import Post from './screens/post';
import {View, Text, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'

// const - a signal the variable wont be reassigned. use const by default.
// use let only if rebinding is needed

const getFonts = () => Font.loadAsync({
    'advent-regular': require('./assets/fonts/AdventPro-Regular.ttf'),
    'advent-thin': require('./assets/fonts/AdventPro-Thin.ttf'),
    'advent-medium': require('./assets/fonts/AdventPro-Medium.ttf'),
    'advent-extra-light': require('./assets/fonts/AdventPro-ExtraLight.ttf'),
    'advent-light': require('./assets/fonts/AdventPro-Light.ttf'),
    'advent-semi-bold': require('./assets/fonts/AdventPro-SemiBold.ttf'),
    'advent-bold': require('./assets/fonts/AdventPro-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  if(fontsLoaded){
    return (
      // <View style={styles.container}>
      //   <Home />
      //   <About />
      //   <Forum />
      //   <Post />
      // </View>
    <Navigator/>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('fonts failed to load')} 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
