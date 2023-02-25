import React, {useState} from 'react';
import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModelIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModelIsVisible(false);
  };

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#39B5E0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modelIsVisible}
          onAddGoal={addGoalHandler}
          onCancle={endAddGoalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#0F6292',
  },

  goalContainer: {
    paddingTop: 10,
    flex: 4,
  },
});
