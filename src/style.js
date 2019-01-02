import { StyleSheet, Dimensions } from 'react-native';
import { width } from './utilities/Scale';
export const styles = StyleSheet.create({
  itemContainer: { flex: 1 },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'column',
    zIndex: 0,
    width: (Dimensions.get('window').width - 30),
    marginBottom: '4%',
    left: '4%',
    right: '4%',
  },
  subContent: {
    flexDirection: 'row',
    marginLeft: width * 0.0375,
    marginRight: width * 0.0375,
    marginBottom: width * 0.0275,
    zIndex: 1,
    position: 'absolute',
    bottom: 5,
  },
  navItem: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: 'center',
    zIndex: 0,
  },
  navImage: {
    width: 40,
    height: 40,
  },
  circle: {
    bottom: 18,
  },
});
