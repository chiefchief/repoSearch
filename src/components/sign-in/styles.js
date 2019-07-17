import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: width - 32,
    height: 40,
    padding: 4,
    fontSize: 12,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#3a3a3a',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
