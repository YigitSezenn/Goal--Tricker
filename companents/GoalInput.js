import { TextInput, Button, View, StyleSheet, Modal ,Image} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [addtextsave, settext] = useState("");


  function OnchangeTexts(textInput) {
    settext(textInput);
  }

  function addtext() {
    props.AddText(addtextsave);
    settext("");
  }
 

  return (
    <Modal visible={props.visible} animationType="slide">
    
      <View style={styles.inputcontainer}>
      <Image style  = {styles.image} source={require("../assets/img/target.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!!!"
          onChangeText={OnchangeTexts}
          value={addtextsave}
        />

        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addtext} color="#00ff15" />
          </View>
          <View style={styles.button}>
            <Button color = {"blue"} title="Cancel" onPress={props.onCancel} color="#f31286" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 17,
    marginBottom: 16,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  
  },
 
  image: {
    width: 100,
    height: 100,
    margin: 20,
   
  },
});

export default GoalInput;
