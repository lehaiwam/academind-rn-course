import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Modal, Image } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalVisible, setModalVisible] = useState(true)
  const [goals, setGoals] = useState([])
  const [enteredGoal, setEnteredGoal] = useState('')

  const startAddGoalHandler = () => {
    setModalVisible(true)
  }

  const onPressCancel = () => {
    setModalVisible(false)
  }

  const onPressAddGoalHandler = () => {
    setGoals( currGoals => {
      return [...currGoals, {id: Math.random(), goal: enteredGoal }]
    })
    setEnteredGoal('')
    setModalVisible(false)
  }

  const deleteGoal = (id) => {
    setGoals( (currGoals) => {
      return ( 
        currGoals.filter( (goal) => {
          return (goal.id !== id )
        })
      )
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button 
        title="add new goal" 
        color="#5e0acc" 
        onPress={startAddGoalHandler}/>
       
      <Modal visible={modalVisible} animationType="slide">
     
        <View style={styles.inputContainer}>

          <Image style={styles.image} source={require('./assets/images/goal.png')} />

          <TextInput 
              style={styles.textInput} 
              placeholder="Enter new goal..."
              value={enteredGoal}
              onChangeText={ enteredText =>setEnteredGoal(enteredText)} />

          <View style={styles.buttonContainer}>
            <View style={styles.btnCancel}>
              <Button title="cancel"  color="red" onPress={onPressCancel} /> 
            </View>  
            <View style={styles.btnAdd}>
              <Button title="add goal" color="#5e0acc" onPress={onPressAddGoalHandler} />
            </View>           
          </View>
        </View>
      
      </Modal>
      
     
   
      <View style={styles.goalsContainer}> 
        <FlatList
          data={goals}
          keyExtractor={(item, index) => { return item.id }}
          renderItem={(itemData) => {
            return <GoalItem goalObject={itemData.item} deleteGoal={deleteGoal}/>
          }}
        />
       
      </View> 
    </View>
    </>
  ); 
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  inputContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin:12,
    paddingBottom: 16,
    backgroundColor: '#311b6b'
  },

  image: {
    width:150,
    height: 150,
    marginBottom: 12,
  },

  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#120438',
  },

  buttonContainer: {
    width: '90%',
    marginTop: 12,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  btnCancel: {
    width: '35%',
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 16,
  },

  btnAdd: {
    width: '35%',
    borderWidth: 5,
    borderColor: '#5e0acc',
    borderRadius: 16,
  },

  goalsContainer: {
    flex: 10,
    marginLeft: 12,
    marginRight: 12,
    padding: 8,
    flexDirection: 'column'
  },

});
