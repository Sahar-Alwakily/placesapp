import React, {useState} from 'react';
import {Text,StyleSheet,View,TextInput,Button,TouchableHighlight,Alert,ScrollView,} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import allLocations from '../data/allLocations'
const AddLocation = () => {
  
  const [StartHour, setStartHour]  = useState('00:00');
  const [FirstLocation, setFirstLocation] = useState('');
  const [firstHour, setfirstHour] = useState('00:00');
  const [twoLocation, setTwoLocation] = useState('');
  const [twoHour, settwoHour] = useState('00:00');
  const [threeLocation, setThreeLocation] = useState('');
  const [threeHour, setthreeHour] = useState('00:00');
  const [fourLocation, setFourLocation] = useState('');
  const [data, setData] = useState(new Date());

  const [isTimePickerVisibleStart, setisTimePickerVisibleStart] = useState(false);
  const [isTimePickerVisibleOne, setisTimePickerVisibleOne] = useState(false);
  const [isTimePickerVisibleTwo, setisTimePickerVisibleTwo] = useState(false);
  const [isTimePickerVisibleThree, setisTimePickerVisibleThree] = useState(false);


  const showTimePickerStart = () => {setisTimePickerVisibleStart(true);};
  const showTimePickerOne = () => {setisTimePickerVisibleOne(true);};
  const showTimePickerTwo = () => {setisTimePickerVisibleTwo(true);};
  const showTimePickerThree = () => {setisTimePickerVisibleThree(true);};

  const hideTimePickerStart = () => {setisTimePickerVisibleStart(false);};


  const hideTimePickerOne = () => {setisTimePickerVisibleOne(false);};


  const hideTimePickerTwo = () => {setisTimePickerVisibleTwo(false);};


  const hideTimePickerThree = () => {setisTimePickerVisibleThree(false);};


  const showAlert = () => {
    Alert.alert('Error', 'All fields are required', [
      {
        text: 'OK',
      },
    ]);
  };

  const createNewAppointment = () => {
    if (
        StartHour.trim() === '' ||
        FirstLocation.trim() === '' ||
        firstHour.trim() === '' ||
        twoLocation.trim() === '' ||
        twoHour.trim() === '' ||
        threeLocation.trim() === ''||
        threeHour.trim() === ''||
        fourLocation.trim() === ''

    ) {
      showAlert();

      return;
    }

    const location = {StartHour, FirstLocation, firstHour, twoLocation,
                         twoHour,threeLocation,threeHour,fourLocation};

    const newallLocations = [...allLocations, location];

    setShowForm(false);

    setPatient('');
    setOwner('');
    setPhone('');
    setData('');
    setHour('');
    setSymptom('');
  };


  const onChangeStart = ( selectedData) =>{
    hideTimePickerStart();
    console.log(selectedData.timestamp);

    const currentDate =selectedData || data;
    let tempDate = new Date(currentDate.timestamp);
    console.log(tempDate);
    let Starthour =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    setStartHour(Starthour);
    console.log(Starthour);

}

const onChangOne = ( selectedData) =>{
  hideTimePickerOne();
  const currentDate =selectedData || data;
  let tempDate = new Date(currentDate);
  let hourOne =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
  setfirstHour(hourOne);
  console.log(hourOne);

}

const onChangeTwo = ( selectedData) =>{
  hideTimePickerTwo();
  const currentDate =selectedData || data;
  let tempDate = new Date(currentDate);
  let hourTwo =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
  settwoHour(hourTwo);
  console.log(hourTwo);

}

const onChangeThree = ( selectedData) =>{
  hideTimePickerThree();  const currentDate =selectedData || data;
  let tempDate = new Date(currentDate);
  let hourThree =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
  setthreeHour(hourThree);
  console.log(hourThree);
}




  return (
    <>
      <ScrollView style={styles.form}>


        
      <View>
          <Text style={styles.label}>StartHour:</Text>
          <Button title="Select start Hour" onPress={showTimePickerStart} />

          {isTimePickerVisibleStart && <DateTimePicker
            mode="time"
            value={data}
            is24Hour={true}
            onCancel={hideTimePickerStart}
            locale="en_EN"
            onChange={onChangeStart}
            headerTextIOS="Choose the Start hour"/>
          }
          <Text>{StartHour}</Text>
        </View>

        <View>
          <Text style={styles.label}>FirstLocation:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setFirstLocation(text)}
          />
        </View>

        <View>
          <Text style={styles.label}>first Hour:</Text>
          <Button title="Select first Hour" onPress={showTimePickerOne} />
          { isTimePickerVisibleOne && <DateTimePicker
            mode="time"
            value={data}
            onCancel={hideTimePickerOne}
            locale="en_EN"
            onChange={onChangOne}
            headerTextIOS="Choose the first hour"
          />}
          <Text>{firstHour}</Text>
        </View>

        <View>
          <Text style={styles.label}>twoLocation</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setTwoLocation(text)}
          />
        </View>

        <View>
          <Text style={styles.label}>two Hour:</Text>
          <Button title="Select two Hour" onPress={showTimePickerTwo} />

          {isTimePickerVisibleTwo && <DateTimePicker
            mode="time"
            value={data}
            onChange={onChangeTwo}
            onCancel={hideTimePickerTwo}
            locale="en_EN"
            headerTextIOS="Choose the two Hour"
          />}
          <Text>{twoHour}</Text>
        </View>

        <View>
          <Text style={styles.label}>threeLocation</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setThreeLocation(text)}
          />
        </View>


        <View>
          <Text style={styles.label}>three Hour:</Text>
          <Button title="Select Hour" onPress={showTimePickerThree} />
          { isTimePickerVisibleThree && <DateTimePicker
            mode="time"
            value={data}
            onCancel={hideTimePickerThree}
            locale="en_EN"
            onChange={onChangeThree}
            headerTextIOS="Choose the hour"
          />}
          <Text>{threeHour}</Text>
        </View>
        <View>
          <Text style={styles.label}>four Location:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => setFourLocation(text)}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => createNewAppointment()}
            style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>Create New Locations</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: 'green',
    marginVertical: 10,
    marginBottom: 100,
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Birth: {
    marginRight: 100,
    color: 'black',
    marginBottom: 15

  },
});

export default AddLocation;