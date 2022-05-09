import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }){
    return <View>
    <Pressable>
    <View>
    <Image source={{uri: imageUrl}} style={styles.image} />
    <Text>{title}</Text>
    </View>
    <View style={styles.details}>
    <Text>{duration}</Text>
    <Text>{complexity}</Text>
    <Text>{affordability}</Text>
    </View>
    </Pressable>    
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',      
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 1,  
    },
});