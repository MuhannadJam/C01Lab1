import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ titles }) => {
    const [toDos, settoDos] = useState(titles.map((value) => ({ id: uuidv4(), toDo: value})))

    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), toDo: newTitle };
        settoDos((prevToDoList) => [...prevToDoList, newToDo]);
    };

    const removeToDo = (id) => {
        settoDos((prevToDoList) => prevToDoList.filter((ToDo) => ToDo.id !== id));
    };

    return (
        <View style={styles.todoListContainer}>
          {toDos.map((toDo) => (
            <View style={styles.todoItem} key={toDo.id}>
                <Text>{toDo.value}</Text>
                <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
            </View>
          ))}
          <AddTask onAddTask={addToDo} />
        </View>
      );

};

ToDoList.defaultProps = {
    titles: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;