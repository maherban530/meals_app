import { useLayoutEffect } from "react";
// import { View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealList";
// import MealDetails from "..\components\MealsList\mealDetails";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealsItem) => {
       return mealsItem.categoryIds.indexOf(catId) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
            
        });      
    }, [catId, navigation]);    

    
  return <MealsList items={displayMeals} />
   
}

export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,      
//     },
// });