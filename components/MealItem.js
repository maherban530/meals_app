import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealsList/mealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }){
    const navigation = useNavigation();
    function selectMealItemHandler(){
        
        navigation.navigate('MealDetailScreen', {mealId: id});    
    }

    
    return <View>
    <Pressable
    android_ripple={{color: '#ccc'}}
    style={({pressed}) => (pressed ? styles.buttonPressed : null)}
    onPress={selectMealItemHandler}
    >
    <View>
    <Image source={{uri: imageUrl}} style={styles.image} />
    <Text>{title}</Text>
    </View>
    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
    </Pressable>    
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',      
    },
   
    buttonPressed: {
       opacity: 0.50,
    },
});