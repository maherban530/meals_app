import {Text} from 'react-native';
import { useContext } from 'react';
import MealsList from '../components/MealsList/MealList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen(){
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;