import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './style';
const TabBarItem = (props) => {
  const { children } = props;
  if (children.length && children.length > 0) {
    throw new Error('onlyChild must be passed a children with exactly one child.');
  }
  return (
    <View style={styles.itemContainer}>
      {children}
    </View>
  );
};
TabBarItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default TabBarItem;
