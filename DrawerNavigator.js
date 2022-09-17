import * as React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native"

function Home({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="გვერდების ნახვა"/>
    </View>
  );
}

function Tasks() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Task Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return  (
<View style={{flex: 1}}>
  <DrawerContentScrollView {...props}>
   <View style={{flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center", backgroundColor: "#f6f6f6", marginBottom: 20 }}>
    <View>
        <Text>Here is Johnny</Text>
        <Text>randomEmail@email.com</Text>
    </View>
    <Image style={{width: 60, height: 60, borderRadius: 30}} 
    source={require("./mountain.png")}/>
   </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <TouchableOpacity style={{position: "absolute", left: 0, right: 0,  bottom: 50, backgroundColor: "#f6f6f6", padding: 20}}>
      <Text>Log out</Text>
    </TouchableOpacity>
</View>
 )
}

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    screenOptions={{headerShown: true, headerStyle: {backgroundColor: "transparent", elevation: 0,}}} 
    initialRouteName="Home" 
    drawerContent={(props) => <CustomDrawer {...props}/>}
    >
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={Tasks} />
    </Drawer.Navigator>
  );
}


