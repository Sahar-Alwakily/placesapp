import { StyleSheet, Text, View, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native-gesture-handler';
//const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
//const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };
import 'react-native-gesture-handler';



const radioButtonsData = [
  {
    id: '1',
    label: (<Text style={{ color: 'black' }}>{'Male'}</Text>)
    ,

    value: 'option1',
    color: 'green',
    selected: false,

  },
  {
    id: '2',
    label: (<Text style={{ color: 'black' }}>{'Female'}</Text>)
    ,
    value: 'option2',
    color: 'green',
    selected: false
  },


];

const SignUp = ({ navigation }) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  //const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const AddUser = () => {

    const s = {
      Name: name,
      //Address: address,
      PhoneNumber: phoneNumber,
      UserName: userName,
      Gender: radioButtons[0].selected === true ? 'Male' : 'Female',
      BirthDate: date,
      Password: password,
      Image: ''
    }
    console.log(s);
    fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Users', {
      method: 'Post',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        res.ok === true ?
          navigation.navigate('Home') :
          alert("try again later");
        return res.json()
      })
      .then(
        (error) => {
          console.log("err post=", error);
        }
      );


  }

  return (
  <ScrollView>
    <View style={styles.container}>
      
        <Text style={styles.Text}>Sign Up to Enjoy It </Text>
        <TextInput placeholder='enter name' placeholderTextColor='black' style={styles.TextInput} onChangeText={name => setName(name)} />
        <TextInput placeholder='enter UserName' placeholderTextColor='black' style={styles.TextInput} onChangeText={name => setUserName(name)} />
        <TextInput placeholder='enter Password' placeholderTextColor='black' secureTextEntry={true} style={styles.TextInput} onChangeText={pass => setPassword(pass)} />
        <TextInput placeholder='enter PhoneNumber' placeholderTextColor='black' style={styles.TextInput} onChangeText={phone => setPhoneNumber(phone)} />
        

        <Text style={styles.RADIO}>Gender:</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />

        <Text style={styles.Birth}>BirthDate :</Text>
        <DatePicker style={{ width: '80%' }}
          date={date}
          placeholder='Select Date'
          format='YYYY/MM/DD'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          placeholderTextColor='black'
          onDateChange={(d) => setDate(d)}
        />
        <Text style={styles.btn} onPress={AddUser}>Submit</Text>
      </View>  
      </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 30,
    marginBottom:40,
    marginTop:30

  },
  TextInput: {
    borderWidth: 2,
    borderColor: 'green',
    color: 'black',
    width: 300,
    height: 40,
    padding: 5,
    marginTop: 10,


  },
  btn: {
    marginTop: 30,
    borderColor: 'green',
    borderWidth: 2,
    color: 'black',
    width: 90,
    height: 30,
    textAlign: 'center',
    marginBottom: 30,
    paddingTop: 5
  },
  singUp: {
    fontWeight: 'bold'
  },
  txt: {
    color: 'black'
  },
  RADIO: {
    color: 'black',
    marginTop: 10,
    padding: 6,
    marginRight: 240
  },
  Birth: {
    marginRight: 220,
    color: 'black',
    marginBottom: 15
  },
  date: {
    shadowColor: 'black',

  }
});
export default SignUp;