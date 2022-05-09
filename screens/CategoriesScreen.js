import { StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';


function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler(){
      navigation.navigate('MealsOverViewScreen', {categoryId: itemData.item.id});
    }

    return (
      <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
    data = {CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
  );

}

export default CategoriesScreen;

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});
