import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  sort_fields: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sort_button: {
    flex: 1,
    height: 40,
    backgroundColor: '#3a3a3a',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last_sort_button: {
    marginLeft: 16,
  },
  active_sort: {
    backgroundColor: '#6e6e6e',
  },
  button_text: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
