import React from 'react'
import { StyleSheet, Text, View ,Pressable} from 'react-native'
  function GoalItem(props) {
  return (
    <View style = {styles.goalsitem}>
    <Pressable android_ripple={{color: '#ffaaaaaa'}} onPress={props.onDelete.bind(this,props.id)}> 
    <Text style = {styles.goaltext}>{props.text}</Text>
    </Pressable>
    </View>
  );
}
export  default GoalItem;
  const styles = StyleSheet.create({
  goalsitem :
   {
    margin: 8,
    padding : 8,
    borderWidth : 1,
    borderRadius : 5,
    backgroundColor :'purple',
    color:'white'

   },
   goaltext :
   {
     color:'white',
     padding :12,
   }

  })
   

 
