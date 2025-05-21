import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

// Change from named export to default export
const AppNavigator = () => {
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false }}>
        {authState?.authenticated ?
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => (
                <View style={styles.headerButtonContainer}>
                  <Button onPress={onLogout} title="Sign Out" />
                </View>
              ),
              headerShown: true,
              
            }}
          />
          :
          <Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginBottom: 10, 
  }
});


export default AppNavigator;

export { AppNavigator };