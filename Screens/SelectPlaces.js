import React, { useContext, useState } from 'react';

import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from 'react-native';

//import { ContextForItems } from '../Components/ContextItems';

import DatePicker from 'react-native-datepicker';

import NumericInput from 'react-native-numeric-input'


export default function PlanningTracks({ route, navigation }) {

 // const contextPro = useContext(ContextForItems);

  const [date, setDate] = useState('');

  const [hours, setHours] = useState(0);

  const [minutes, setMinutes] = useState(0);

  const [arrPlaces, setArrPlaces] = useState([]);

  const results = [];


  const Save = () => {

    arrPlaces.length > 1 ?

      arrPlaces.map(function (index) {

        index !== arrPlaces.length ?

          ValidTrack(arrPlaces[index], arrPlaces[index + 1])

          : null

      }) : null

  }


  const ValidTrack = (item1, item2) => {

    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" + item1.p + "&origins=" + item2.p + "&units=imperial&key=AIzaSyBkvI7scb3Lk8a2RLB0VI55Ma6TyvbX8LA", {

      method: 'GET',

      headers: new Headers({

        'Content-Type': 'application/json; charset=UTF-8',

        'Accept': 'application/json; charset=UTF-8'

      })

    })

      .then(res => {

        console.log('res.ok', res.ok);

        return res.json();

      })

      .then(

        (result) => { console.log(result); results.push(result) },

        (error) => {

          return null;

        }

      )

  }


  const HelpF = (index, name) => {

    arrPlaces.length > 0 ? ()=>{

      arr = arrPlaces.filter(x => x.index !== index)

      console.log(arr);

      setArrPlaces([arr, { p: name, h: hours, m: minutes, index: index }])

    }: setArrPlaces([{ p: name, h: hours, m: minutes, index: index }])

    console.log(arrPlaces);


  }


  return (


    <View style={styles.container}>

      <Text style={styles.Birth}>Date :</Text>

      <DatePicker style={{ width: '80%' }}

        date={date}

        placeholder='Select Date'

        format='YYYY/MM/DD'

        confirmBtnText='Confirm'

        cancelBtnText='Cancel'

        placeholderTextColor='black'

        onDateChange={(d) => setDate(d)}

      />

      <Text style={{ borderColor: 'red', color: 'white' }} >Save</Text>

      {

        //contextPro.item.length > 0 ?

          //contextPro.item.map((itemm, index) =>
/*
            <View key={index}>

              <Text style={{ color: 'red', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }} key={itemm.key}>{itemm.name} _ {itemm.location_id}</Text>

              <Text style={{ color: 'white', marginVertical: 5, fontSize: 20, fontWeight: 'bold' }} key={itemm.key}>HH</Text><NumericInput minValue={0} maxValue={24} totalWidth={100} textColor='white' onChange={value => setHours(value)} />

              <Text style={{ color: 'white', marginVertical: 5, fontSize: 20, fontWeight: 'bold' }} key={itemm.key}>MM</Text><NumericInput minValue={0} maxValue={59} totalWidth={100} textColor='white' onChange={value => setMinutes(value)} />

              <Text style={{ borderColor: 'red', color: 'white' }} onPress={() => HelpF(index, itemm.name)}>Save</Text>

              <View key={itemm.key}

                style={{

                  marginVertical: 10,

                  borderBottomColor: 'red',

                  borderBottomWidth: 1,

                }}

              />

            </View>

          )

          :*/

          <Text style={{ color: 'red', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>choose items </Text>

      }

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'black',

    alignItems: 'center',

    justifyContent: 'center'

  },

  subcontainer: {

    flex: 1,

    backgroundColor: 'white',

    alignItems: 'center',

    justifyContent: 'center'

  },

  Birth: {

    marginRight: 100,

    color: 'black',

    marginBottom: 15

  },

  date: {

    shadowColor: 'black',


  }

});