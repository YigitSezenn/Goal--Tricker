import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View , FlatList} from 'react-native';
import { useState } from 'react';
 import GoalItem  from './companents/GoalItem';
 import GoalInput  from './companents/GoalInput';
export default function App() {

 
    const [modalisvisible,setmodalisvisible] = useState(false);
    const  [list,setclistext] = useState ([]);

    function addtext (addtextsave)
  {
      setclistext(currentlist => [...currentlist,
        
        {text: addtextsave,id: Math.random().toString()}
      ]); 
      endaddgoal();
  }
  function startaddgoal()
  {
    setmodalisvisible(true);

  }
  function endaddgoal()
  {
    setmodalisvisible(false);
  }
 
  function deleteitem (id)
  {
    console.log(id);
   setclistext(currentlist => {
    return currentlist.filter((goal) => goal.id !== id);
    
   });
  }
  return (

  <>
 <StatusBar style="light" />
    <View style = {styles.container}>
      
      <Button title="Add Goal" onPress={startaddgoal} color = "#5e0acc" />
      <GoalInput AddText = {addtext} visible = {modalisvisible} onCancel = {endaddgoal} />
    
      
    <View style = {styles.goalscontainer}>
  
      
<FlatList
data={list}
renderItem={(itemData) =>
{
  return  <GoalItem text = {itemData.item.text} 
  id = {itemData.item.id}
  onDelete={deleteitem}/>

}}
keyExtractor={(item,index)=>
{
  return item.id;
}}
alwaysBounceVertical  = {false}
/>
    </View>    
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E085a',
    padding :50,
    paddingHorizontal : 12,
    alignItems : 'center',
  
  },
   goalscontainer:
   {
    flex:4,
   },



});   
