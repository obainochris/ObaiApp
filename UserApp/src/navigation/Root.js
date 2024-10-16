import React from "react"
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreens = (props) => (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>{props.name}</Text>
    </View>

)
    
const RootNavigator = (props) => {
    return (
       <NavigationContainer>
       <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
        }>

        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <DummyScreens name={"Your Trips"} />}
        </Drawer.Screen> 

        <Drawer.Screen name="Help">
          {() => <DummyScreens name={"Help"} />}
        </Drawer.Screen> 

        <Drawer.Screen name="Wallet">
          {() => <DummyScreens name={"Wallet"} />}
            </Drawer.Screen> 

        <Drawer.Screen name="Settings">
          {() => <DummyScreens name={"Settings"} />}
            </Drawer.Screen> 

       </Drawer.Navigator>
       </NavigationContainer>
    );
};

export default RootNavigator;