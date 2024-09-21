import { Text, View } from "react-native";

interface dlist{
    item: ArrayBuffer;
    drag
}
const renderItem = ({ item, drag, isActive }) => {
    return (
      <View >
        <Text
          
          onLongPress={drag} // Initiates drag when the item is long pressed
        >
          {item.label}
        </Text>
      </View>
    );
  };