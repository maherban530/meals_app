import {View, Text, StyleSheet} from 'react-native';

function MealDetails({duration, complexity, affordability}){
    return <View style={styles.details}>
    <Text>{duration}</Text>
    <Text>{complexity}</Text>
    <Text>{affordability}</Text>
    </View>
}

export default MealDetails;

const styles = StyleSheet.create({    
    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 1,  
    },
});