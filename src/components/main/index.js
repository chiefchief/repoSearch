import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { back } from 'src/navigation';
import { connect } from 'react-redux';
import { getRepositories, resetRepositories } from 'reducers/repositories';
import RepoContainer from 'containers/repo-container';
import SortButtons from 'containers/sort-buttons';
//styles
import styles from './styles';

function Main({ componentId, repositories, dispatch }) {
  const [repositoryName, setRepositoryName] = useState('');
  const [sort, setSort] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    if (
      repositories.items.length &&
      !indicator &&
      repositories.total_count > searchCount
    ) {
      setIndicator(true);
    }
  });

  const renderFooter = () => {
    return indicator ? <ActivityIndicator style={styles.indicator} /> : <></>;
  };
  const renderItem = ({ item }) => {
    return <RepoContainer componentId={componentId} item={item} />;
  };
  const keyExtractor = item => {
    return `${item.id}`;
  };
  const request = () => {
    Keyboard.dismiss();
    if (repositories.total_count > searchCount) {
      dispatch(getRepositories(repositoryName, searchCount + 15, sort));
      setSearchCount(searchCount + 15);
    } else {
      setIndicator(false);
    }
  };
  const sortBy = value => {
    setSort(value);
    dispatch(getRepositories(repositoryName, searchCount, value));
  };
  const exit = () => {
    dispatch(resetRepositories());
    back(componentId);
  };
  const changeText = text => {
    setRepositoryName(text);
    setSearchCount(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exit} onPress={exit}>
        <Text style={styles.exit_text}>EXIT</Text>
      </TouchableOpacity>
      <View style={styles.search_fields}>
        <TextInput
          placeholder="repository name..."
          style={styles.input}
          value={repositoryName}
          onChangeText={changeText}
          onSubmitEditing={request}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.search_button} onPress={request}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <SortButtons sort={sort} sortBy={sortBy} />
      <FlatList
        style={styles.flat}
        data={repositories.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.4}
        onEndReached={request}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
  };
};

export default connect(mapStateToProps)(Main);
