import React from 'react';
import { Button } from 'react-native';
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authState?.authenticated ? 
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
              headerShown: false
            }}
          /> 
         : 
          <Stack.Screen name="Login" component={Login}  />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export as default
export default AppNavigator;

// Also provide named export for backward compatibility
export { AppNavigator };