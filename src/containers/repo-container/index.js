import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigateTo } from 'src/navigation';
import { setWeb } from 'reducers/web';
//styles
import styles from './styles';

function RepoContainer({ componentId, item, dispatch }) {
  const goModal = async () => {
    await dispatch(setWeb(item.html_url));
    await navigateTo(componentId, 'Modal');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goModal}>
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.title}>Description:</Text>
      <Text style={styles.text}>{item.description}</Text>
      <View style={styles.bottom_fields}>
        <Text style={styles.text}>STARS: {item.watchers_count}</Text>
        <Text style={styles.text}>FORKS: {item.forks_count}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default connect()(RepoContainer);
