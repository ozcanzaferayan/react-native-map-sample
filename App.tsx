import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet, StatusBar} from 'react-native';
import customMapStyle from './customMapStyle.json';

const App = () => {
  const region = {
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        customMapStyle={customMapStyle}>
        <Marker coordinate={region} pinColor={'#1976d2'} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default App;
