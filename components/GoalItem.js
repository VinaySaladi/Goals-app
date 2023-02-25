import {StyleSheet, Text, View, Pressable} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#a23b23'}}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#C7BCA1',
  },
  goalText: {
    color: '#2C3333',
    padding: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
