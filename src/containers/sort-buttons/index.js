import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//styles
import styles from './styles';

export default function SortButtons({ sort, sortBy }) {
  return (
    <View style={styles.sort_fields}>
      <TouchableOpacity
        style={[styles.sort_button, sort === 1 && styles.active_sort]}
        onPress={() => sortBy(1)}
      >
        <Text style={styles.button_text}>Sort by start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sort_button,
          styles.last_sort_button,
          sort === 2 && styles.active_sort,
        ]}
        onPress={() => sortBy(2)}
      >
        <Text style={styles.button_text}>Sort by forks</Text>
      </TouchableOpacity>
    </View>
  );
}
