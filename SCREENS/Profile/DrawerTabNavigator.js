import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name=" newtab" component={TabNavigator} />
      <Drawer.Screen name=" TaskCompleted" component={TasksCompleted} />
      <Drawer.Screen name=" ContactUs" component={ContactUs} />
      <Drawer.Screen name=" Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
