import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsNavigator from './MainTabsNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { AuthContext } from '../../contexts/AuthContext';
import { View, ActivityIndicator } from 'react-native';

const Navigation = () => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isAuthenticated ? <MainTabsNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
};

export default Navigation;
