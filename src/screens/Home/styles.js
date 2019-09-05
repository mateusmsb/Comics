import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 8,
  },
  searchBar: {
    flex: 0.95,
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'white',
    width: '98%',
  },
  searchComponent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    width: '90%',
  },
  searchButton: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonConteiner: {
    flex: 0.25,
    padding: 5,
  },
});

export default homeStyles;
