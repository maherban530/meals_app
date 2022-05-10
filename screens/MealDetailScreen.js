import { useLayoutEffect, useContext } from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import MealDetails from "../components/MealsList/mealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation}){
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler(){
      if(mealIsFavorite){
          favoriteMealsCtx.removeFavorite(mealId);
      }else{
          favoriteMealsCtx.addFavorite(mealId);
      }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<IconButton
                icon={mealIsFavorite ? 'star' : 'star-outline'}
                color='white' onPress={changeFavoriteStatusHandler} 
                />);
                // <Pressable onPress={changeFavoriteStatusHandler}>
                // <Ionicons
                // name={mealIsFavorite ? "star" : "star-outline"}
                // color="amber" size={24}
                // />
                // </Pressable>
            }            
        });      
    }, [navigation, changeFavoriteStatusHandler]);

    
    return <View>
    <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
    <Text>{selectedMeal.title}</Text>
    <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
    <Text>Ingredients</Text>
    {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
    ))}
    </View>
}

export default MealDetailScreen;

const styles = StyleSheet.create({    
    image: {
        height: 200,
        width: '100%',      
    },
});
