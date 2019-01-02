
import React from 'react';
import {
  View,
  TouchableHighlight,
  Animated,
  Image,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Circle, Path } from 'react-native-svg';
import TabBarItem from './src/TabBarItem';
import { styles } from './src/style';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
export default class TabBar extends React.PureComponent {
    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
      style: ViewPropTypes.style,
    }
    constructor(props) {
      super(props);
      if (this.props.children.length !== 3) {
        throw new Error('Three tab should be work.');
      }
      this.state = {
        selectedIndex: 1,
        defaultPage: 1,
        navFontSize: 12,
        navTextColor: 'rgb(148, 148, 148)',
        navTextColorSelected: 'rgb(51, 163, 244)',
        circleRadius: new Animated.Value(546),
        pathD: new Animated.Value(357),
        pathX: '357',
        pathY: '675',
        pathA: '689',
        pathB: '706',
        showIcon: true,
      };
      this.state.circleRadius.addListener((circleRadius) => {
        this.myCircle.setNativeProps({ cx: circleRadius.value.toString() });
      });

      this.state.pathD.addListener((a) => {
        this.setState({
          pathX: a.value.toString(),
          pathY: (318 + parseInt(a.value)).toString(),
          pathA: (330 + parseInt(a.value)).toString(),
          pathB: (350 + parseInt(a.value)).toString(),
        });
      });
    }
    update(index) {
      const { selectedIndex, pathD, circleRadius } = this.state;
      if (selectedIndex !== index) {
        this.setState({
          selectedIndex: index,
          showIcon: false,
        });
        switch (index) {
          case 0:
            Animated.spring(pathD, { toValue: 22, duration: 10, friction: 10 }).start();
            this.setState({
              showIcon: true,
            });
            Animated.spring(circleRadius, { toValue: 211, friction: 10 }).start();
            break;
          case 2:
            Animated.spring(pathD, { toValue: 691, duration: 10, friction: 10 }).start();
            this.setState({
              showIcon: true,
            });
            Animated.spring(circleRadius, { toValue: 880, friction: 10 }).start();
            break;
          default:
            Animated.spring(pathD, { toValue: 357, duration: 10, friction: 10 }).start();
            this.setState({
              showIcon: true,
            });
            Animated.spring(circleRadius, { toValue: 546, friction: 10 }).start();
            break;
        }
      }
    }
    render() {
      const { children, style } = this.props;
      const { selectedIndex, showIcon } = this.state;
      return (
        <View
          style={[styles.container, style, children[this.state.selectedIndex].props.screenBackgroundColor
            ? children[this.state.selectedIndex].props.screenBackgroundColor : '#008080']}
        >
          {children[selectedIndex]}
          <View style={[styles.content]}>
            <View style={styles.subContent}>
              {
                React.Children.map(children, (child, i) => {
                  const imgSrc = selectedIndex === i && showIcon
                    ?
                    (<View style={styles.circle}>
                      <Image
                        style={styles.navImage}
                        resizeMode="cover"
                        source={child.props.selectedIcon}
                      />
                    </View>)
                    :
                    (<Image
                      style={styles.navImage}
                      resizeMode="cover"
                      source={child.props.icon}
                    />);
                  return (

                    <TouchableHighlight
                      key={i}
                      underlayColor={'transparent'}
                      style={styles.navItem}
                      onPress={() => this.update(i)}
                    >

                      {imgSrc}
                    </TouchableHighlight>
                  );
                })
              }
            </View>
            <Svg version="1.1" id="bottom-bar" x="0px" y="0px" width="100%" height="100" viewBox="0 0 1092 260" space="preserve">
              <AnimatedPath
                fill="#f0f0f0"
                d={`M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,
                129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${this.state.pathY}.7,74.5,
                ${this.state.pathA}.5,60,${this.state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
              />
              <AnimatedCircle ref={(ref) => { this.myCircle = ref; }} fill="#f0f0f0" cx="546" cy="100" r="100" />
            </Svg>
          </View>
        </View>
      );
    }
}
TabBar.Item = TabBarItem;
