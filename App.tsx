import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTask from './src/screen/ListTask';
import Home from './src/screen/Home';
import Header from './src/component/Header';
import DetailTask from './src/screen/DetailTask';
import CreateTask from './src/screen/CreateTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          header: (props) => <Header nativeHeaderProps={props} />,
        }}>
          {/* Configure ListTask screen */}
          <Stack.Screen
            name="ListTask"
            component={ListTask}
            options={{ title: "Danh sách phiếu" }}
          />
          {/* Configure Home screen */}
          <Stack.Screen name="Home" component={Home} options={{ title: "Home" }}
          />
          <Stack.Screen name="Detail" component={DetailTask} options={{ title: "Quy trình đánh giá thử việc" }}
          />
          <Stack.Screen name="CreateTask" component={CreateTask} options={{ title: "Tạo Phiếu" }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});

