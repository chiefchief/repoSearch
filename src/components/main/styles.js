import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    paddingTop: 48,
  },
  search_fields: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 4,
    fontSize: 16,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 8,
  },
  search_button: {
    height: 40,
    backgroundColor: '#3a3a3a',
    borderRadius: 8,
    marginLeft: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff',
  },
  exit: {
    backgroundColor: '#3a3a3a',
    height: 48,
    width: 48,
    borderRadius: 24,
    position: 'absolute',
    bottom: 24,
    left: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  exit_text: {
    color: '#fff',
    fontWeight: '500',
  },
  flat: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  indicator: {
    color: '#000',
    marginBottom: 16,
  },
});
