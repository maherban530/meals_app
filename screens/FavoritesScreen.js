// import {Text} from 'react-native';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen(){
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;