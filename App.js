import React from 'react';
import 'react-native-gesture-handler'
import { SafeAreaView, StatusBar } from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import LocationSearchScreen from './src/screens/LocationSearch';
import GuestsScreen from './src/screens/Guests';

import Router from './src/navigation/Router'

import Post from './src/components/Post';
import feed from './assets/data/feed';

const postOne = feed[0];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};



export default App;
