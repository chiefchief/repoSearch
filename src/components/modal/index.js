import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { back } from 'src/navigation';
//styles
import styles from './styles';

function Modal({ web, componentId }) {
  return (
    <View style={styles.container}>
      <WebView style={styles.web} source={{ uri: web }} />
      <TouchableOpacity
        style={styles.close}
        onPress={() => {
          back(componentId);
        }}
      >
        <Image style={styles.img} source={require('assets/close1.png')} />
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    web: state.web,
  };
};

export default connect(mapStateToProps)(Modal);
