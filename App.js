import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoriteContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  const Drawer = createDrawerNavigator();

  return <Drawer.Navigator  screenOptions={
    { 
      headerStyle: {backgroundColor: '#c6cbef'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
    }
  }>
  <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
    title: "All Categories",
  }} />
  <Drawer.Screen name='Favorites' component={FavoritesScreen}/>

  </Drawer.Navigator>
}

export default function App() {
  return (
    // <FavoriteContextProvider>
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={
      { 
        // contentStyle: {
        //   backgroundColor: '#c6cbef',
        //   // width: 240,
        // },
        headerStyle: {backgroundColor: '#cccccc'},
        // headerTitleStyle: {fontSize: 18}
      }
    }
    >
    <Stack.Screen name="DrawerMealsCategories" component={DrawerNavigator}
    options={{
      headerShown: false,
    }}
    />
    <Stack.Screen name="MealsOverViewScreen" component={MealsOverviewScreen} />
    <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />

    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    // </FavoriteContextProvider>
  );
  
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
