/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();
class App extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    const counter = this.state.counter + 1;
    this.setState({counter});
    console.log(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            initialParams={{
              self: this,
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
function HomePage({navigation, route}) {
  console.log(route);
  const [, setState] = useState();
  const params = route.params;
  const parent = params.self;
  const calc = () => {
    parent.incrementCounter();
    setState({});
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.centerText}>{parent.state.counter}</Text>
              <Button title="Press me" onPress={calc} />
              <Text />
              <Button
                title="go Details"
                onPress={() => navigation.navigate('Details')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  centerText: {
    padding: 7,
    textAlign: 'center',
    fontSize: 25,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default function (props) {
  return <App {...props} />;
}
