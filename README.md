# AnimatedTabBar Interaction

Beautiful Tabbar Interaction with Sliding Inset FABs,
made with React Native.

# Installation
`npm i DineshRajput21/AnimatedTabBar`

           OR
           
`yarn add DineshRajput21/AnimatedTabBar`

After that you need to install React Native SVG using commands and link :

`npm install react-native-svg --save`
    OR
 `yarn add react-native-svg`
 
 After that run link command
 
`react-native link react-native-svg`

Android: `react-native run-android`

iPhone: `react-native run-ios`


# Usage

```js

import TabBar from "AnimatedTabBar";
...
  render() {
      return (
          <TabBar>
            <TabBar.Item
                icon={require('./tab1.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./tab2.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                    {/*Page Content*/}
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./tab3.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
          </TabBar>
      );
    }
```

## Component props

| prop | value | required/optional | description |
| --- | --- | --- | --- |
| icon | image source | required | the icon when item is not focus |
| selectedIcon | image source | required | the icon when item is focus |
| title | string | required | title of item |
| screenBackgroundColor | string | required | background color of tab |

## Dependencies

* `react-native-svg`


# Changelog

### Version: 1.0

  * Initial Build



# LICENSE!

React-native-tabbar-interaction is [MIT-licensed](https://github.com/Mindinventory/react-native-tabbar-interaction/blob/master/LICENSE).

# Let us know!
We’d be really happy if you send us links to your projects where you use our component. Just send an email to sales@mindinventory.com And do let us know if you have any questions or suggestion regarding our work.
