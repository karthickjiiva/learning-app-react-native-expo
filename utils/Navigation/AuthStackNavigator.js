import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import OnBoarding from '../../screens/onBoarding/OnBoarding'
const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
