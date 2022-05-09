import { StyleSheet, Text, View, Pressable } from 'react-native';

function CategoryGridTile({title, color, onPress}) {
  return <View style={[styles.grid, {backgroundColor: color}]}>
    <Pressable
    android_ripple={{color: '#ccc'}}
    style={({pressed}) => [styles.bbutton, pressed ? styles.bbuttonOpacity : null]}
    onPress={onPress}
    >
    <View style={[styles.innerContainer, {backgroundColor: color}]}
    
    > 
    <Text>{title}</Text>
    </View>
    </Pressable>
    </View>
  
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
   margin: 16,
   elevation: 10,
  },
  innerContainer: {
    flex: 1,   
   padding:33,
   justifyContent: 'center',
   alignItems: 'center',
  },
  bbuttonOpacity: {
    opacity: 0.60,
  },
  bbutton: {
    flex: 1,
  }
});
