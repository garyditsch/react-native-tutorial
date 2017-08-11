// index.ios.js place code here for ios

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
    return(
        <View style={{ flex: 1}}>
            <Header headerText={'Album'} />
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
