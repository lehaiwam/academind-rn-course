import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = (props) => {
    const {id, goal } = props.goalObject
    const { deleteGoal } = props

    const deleteGoalHandler=()=> {
        deleteGoal(id)
    }

    return (
        <View style={styles.goalTextContainer} >
            <Pressable
                android_ripple={{ color: 'grey'}}
                onPress={ deleteGoalHandler }>
                <Text style={styles.goalText}>
                    { goal } 
                </Text> 
            </Pressable>     
        </View>   
    )
}

export default GoalItem

const styles = StyleSheet.create({

    goalTextContainer: {
        marginBottom: 6,
        borderWidth: 1,
        backgroundColor: '#5e0acc',
        borderColor: 'white',
        borderRadius: 8,
        
    },
    
    goalText: {
        fontSize:20,
        padding: 8,
        color: 'white',
        textTransform: 'capitalize',
    }  

})