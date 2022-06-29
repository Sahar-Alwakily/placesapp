import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';

import { View, Text, StyleSheet,TouchableOpacity ,Button,MyTextInput} from 'react-native';
import { ScrollView} from 'react-native-virtualized-view';
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';
import showError from '../helper/helperFunction'


const addPlace = ({ navigation }) => {

    const [state, setState] = useState({
        destinationCords: {}
    })
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setshow] = React.useState(false);
    const [hours, sethours ] = React.useState('00: 00');

    const { destinationCords } = state

    const checkValid = () =>{
        if(Object.keys(destinationCords).length === 0){
            showError('Please enter your destination location')
            return false
        }// checl all value another time
        return true
    }

    const onChange = ( selectedData) =>{
        const currentDate =selectedData || data;
        setDate(currentDate);
        setshow(false);
        let tempDate = new Date(currentDate);
        let hour =`${(tempDate.getHours())}`+ ':'+ `${(tempDate.getMinutes())}`;
        setDate(tempDate.getDate());//save date whrn select
        sethours(hour);//save hours whrn select
    }

    const onDone = () => {


       /* const isValid = checkValid()
        if(isValid){
            props.route.params.getCordinates({
                destinationCords
            })
            navigation.goBack()
        }*/
    }
    const fetchDestinationCords = (lat, lng, zipCode, cityText) => {
        console.log("zip code==>>>",zipCode)
        console.log('city texts',cityText)
        setState({
            ...state,
            destinationCords: {
                latitude: lat,
                longitude: lng
            }
        })
    }

    const showMode = (currentMode) => {
        setshow(true); setMode(currentMode);
    }
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ backgroundColor: 'white', flex: 1, padding: 24 }}
            >
                <View style={{ marginBottom: 16 }} />
                <AddressPickup
                    placheholderText="Enter From Destination Location"
                    fetchAddress={fetchDestinationCords}
                />
                <AddressPickup
                    placheholderText="Enter To Destination Location"
                    fetchAddress={fetchDestinationCords}
                />
                <View style={styles.round}>
                    <Button style={styles.round} title="Time" onPress={() => showMode('time')} />
                    <Text style={styles.label}>{hours}</Text>
                </View>

                {show && <DateTimePicker
                   testID='dateTimePicker'
                   value={date} mode={mode} 
                   is24Hour={true} display= 
                   'default' 
                   onChange={onChange} />
                }
                <MyTextInput
                  label="Full Name"
                  placeholder="Richard Barnes"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  icon="person"
                /> 
                <CustomBtn
                    btnText="Done"
                    onPress={onDone}
                    btnStyle={{marginTop: 24}}
                />

            </ScrollView>

            <TouchableOpacity style={styles.button}>
             <Text style={styles.plus}>+</Text>
             </TouchableOpacity>
        </View>
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    round: {
        margin: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    button: {
        width: 45,
        height: 45,
        borderRadius: 21,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 50,
        right: 15,
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
    }
});
export default addPlace;



