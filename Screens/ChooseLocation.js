import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';

import { View, Text, StyleSheet,TouchableOpacity,TextInput ,Picker,Button} from 'react-native';
import { ScrollView} from 'react-native-virtualized-view';
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';
import showError from '../helper/helperFunction'


const ChooseLocation = ({ route ,navigation}) => {
const [selectedValue, setSelectedValue] = useState("");

    const onAdd = () => {
         const item = {
           OneLocation,twoLocation,threeLocation,fourLocation
           ,OneHour,twoHour,threeHour,fourHour,NameTrack,selectData
        };

        item.OneLocation = OneLocation;
        item.twoLocation = twoLocation;
        item.threeLocation = threeLocation;
        item.fourLocation = fourLocation;

        item.OneHour = OneHour;
        item.twoHour = twoHour;
        item.threeHour = threeHour;
        item.fourHour = fourHour;

        item.NameTrack= NameTrack;
        item.selectData = selectData;

      alert("nice !");
      console.log(item); 
      navigation.navigate('Home', {paramKey: item});//new arr 

    }

    const [Time, setTime] = useState(new Date());
    let locations = route.params.paramKey;
    const [OneHour, setOneHour]  = useState('00:00');
    const [OneLocation, setOneLocation] = useState();
    const [twoLocation, setTwoLocation] = useState('');
    const [twoHour, settwoHour] = useState('00:00');
    const [threeLocation, setThreeLocation] = useState('');
    const [threeHour, setthreeHour] = useState('00:00');
    const [fourLocation, setFourLocation] = useState('');
    const [fourHour, setfourHour] = useState('00:00');
    const [date, setData] = useState(new Date());
    const [selectData, setselectData] = useState(new Date());

    const [NameTrack, onChangeNameTrack] = React.useState("Name Track");


    const [isTimePickerVisibleFour, setisTimePickerVisibleFour] = useState(false);
    const [isTimePickerVisibleOne, setisTimePickerVisibleOne] = useState(false);
    const [isTimePickerVisibleTwo, setisTimePickerVisibleTwo] = useState(false);
    const [isTimePickerVisibleThree, setisTimePickerVisibleThree] = useState(false);


    const[isDatePickerVisible,setisDatePickerVisible]= useState(false);


    const showTimePickerFour = () => {setisTimePickerVisibleFour(true);};
    const showTimePickerOne = () => {setisTimePickerVisibleOne(true);};
    const showTimePickerTwo = () => {setisTimePickerVisibleTwo(true);};
    const showTimePickerThree = () => {setisTimePickerVisibleThree(true);};
    const showDatePicker= () => {setisDatePickerVisible(true);};

    const hideTimePickerFour = () => {setisTimePickerVisibleFour(false);};
    const hideTimePickerOne = () => {setisTimePickerVisibleOne(false);};
    const hideTimePickerTwo = () => {setisTimePickerVisibleTwo(false);};
    const hideTimePickerThree = () => {setisTimePickerVisibleThree(false);};
    const hideDatePicker= () => {setisDatePickerVisible(false);};




    const onChangeFour = ( event, selectedDate) =>{
      hideTimePickerFour();
      const currentDate =selectedDate || data;
      let tempDate = new Date(currentDate);
      let hourf =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
      setfourHour(hourf);
      console.log(hourf);
  }
  

  const onChangOne = (event, selectedDate) =>{
    hideTimePickerOne();
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourOne =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    setOneHour(hourOne);
    console.log(hourOne);
  }
  

  const onChangeTwo = ( event, selectedDate) =>{
    hideTimePickerTwo();
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourTwo =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    settwoHour(hourTwo);
    console.log(hourTwo);
  }


  const onChangDate = ( event, selectedDate) =>{
    hideDatePicker();
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourTwo =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    settwoHour(hourTwo);
    console.log(hourTwo);
  }
  

  const onChangeThree = ( event, selectedDate) =>{
    hideTimePickerThree();  
    const currentDate =selectedDate || data;
    let tempDate = new Date(currentDate);
    let hourThree =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
    setthreeHour(hourThree);
    console.log(hourThree);
  }


  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    console.log(currentDate);
 };


    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Add Travel! </Text>
            <View style={styles.container}>
            <View style={{justifyContent: 'space-between'}}>
            
            <TextInput style={styles.input} onChangeText={onChangeNameTrack} value={NameTrack}/>
            <Text style={styles.Birth}>  </Text>
            <View>
              <DatePicker style={{ width: '80%' }}
              date={date}
              placeholder={selectData}
              format='YYYY/MM/DD'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              placeholderTextColor='red'
              onDateChange={(d) => setselectData(d)}/>
            </View>

              </View>

              <View style={{ flexDirection: 'row' }}>
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 250 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setOneLocation(itemValue)}>
                  <Picker.Item label={locations[0].name} value={locations[0].name} />
                  <Picker.Item label={locations[1].name} value={locations[1].name} />
                  <Picker.Item label={locations[2].name} value={locations[2].name} />
                  <Picker.Item label={locations[3].name} value={locations[3].name} />
                </Picker>
                <View>
                     <Button title="Select Hour" onPress={showTimePickerOne} />
                       { isTimePickerVisibleOne && <DateTimePicker
                       mode="time"
                       value={Time}
                       onCancel={hideTimePickerOne}
                       locale="en_EN"
                       is24Hour={true}
                       onChange={onChangOne}
                       headerTextIOS="Choose the hour"
                      />}
                       <Text>{OneHour}</Text>
                  </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 250 }}
                  selectedValue={OneLocation}
                  onValueChange={(itemValue, itemIndex) => setTwoLocation(itemValue)}>
                  <Picker.Item label={locations[0].name} value={locations[0].name} />
                  <Picker.Item label={locations[1].name} value={locations[1].name} />
                  <Picker.Item label={locations[2].name} value={locations[2].name} />
                  <Picker.Item label={locations[3].name} value={locations[3].name} />
                </Picker>
                <View>
                     <Button title="Select Hour" onPress={showTimePickerTwo} />
                       { isTimePickerVisibleTwo && <DateTimePicker
                       mode="time"
                       value={Time}
                       onCancel={hideTimePickerTwo}
                       locale="en_EN"
                       onChange={onChangeTwo}
                       headerTextIOS="Choose the hour"
                      />}
                       <Text>{twoHour}</Text>
                  </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 250 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setThreeLocation(itemValue)}>
                  <Picker.Item label={locations[0].name} value={locations[0].name} />
                  <Picker.Item label={locations[1].name} value={locations[1].name} />
                  <Picker.Item label={locations[2].name} value={locations[2].name} />
                  <Picker.Item label={locations[3].name} value={locations[3].name} />
                </Picker>
                <View>
                     <Button title="Select Hour" onPress={showTimePickerThree} />
                       { isTimePickerVisibleThree && <DateTimePicker
                       mode="time"
                       value={Time}
                       onCancel={hideTimePickerThree}
                       locale="en_EN"
                       onChange={onChangeThree}
                       headerTextIOS="Choose the hour"
                      />}
                       <Text>{threeHour}</Text>
                  </View>
              </View>   
              
              <View style={{ flexDirection: 'row' }}>
              <Picker
                  mode='dropdown'
                  style={{ height: 50, width: 250 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setFourLocation(itemValue)}>
                  <Picker.Item label={locations[0].name} value={locations[0].name} />
                  <Picker.Item label={locations[1].name} value={locations[1].name} />
                  <Picker.Item label={locations[2].name} value={locations[2].name} />
                  <Picker.Item label={locations[3].name} value={locations[3].name} />
                </Picker>
                <View>
                     <Button title="Select Hour" onPress={showTimePickerFour} />
                       { isTimePickerVisibleFour && <DateTimePicker
                       mode="time"
                       value={Time}
                       onCancel={hideTimePickerFour}
                       locale="en_EN"
                       onChange={onChangeFour}
                       headerTextIOS="Choose the hour"
                      />}
                       <Text>{fourHour}</Text>
                  </View>
              </View>       
              <TouchableOpacity >
             <Button style={styles.button} title="Save" onPress={onAdd} >
             </Button>
             </TouchableOpacity>
    </View>

        </View>
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

      input: {
        marginTop: -10,
        height: 10,
        width:'20%',
        borderColor: '#e1e1e1',
        borderWidth:0,
        borderStyle: 'solid',
      },   
    round: {
        margin: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
      },
    button: {
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        bottom: 50,
        right: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: .8,
        shadowRadius: 5,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginRight: 10,
        fontWeight: 'bold'
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -6,
        left: 9,
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      pickerStyle: {
        width: 250,
        height: 40,
        borderColor: "transparent",
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "transparent",
        marginBottom: 5,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
      },
        container: {
          flex: 1,
          paddingTop: 40,
          alignItems: "center"
        },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
    Birth: {
      color: 'black',
      marginBottom: 15
  
    },
      addText: {},
      
});
export default ChooseLocation;
