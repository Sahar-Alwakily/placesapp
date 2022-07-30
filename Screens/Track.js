import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { LocationData } from '../data/allLocations'
const IC_ARR_DOWN = require('../Images/ic_arr_down.png');
const IC_ARR_UP = require('../Images/ic_arr_up.png');
import DropDownItem from 'react-native-drop-down-item';
import { Newlocations } from './UpdateTrack'
const favorites = LocationData;

const Track = ({route, navigation }) => {

  console.log(LocationData);
  
    const addBody =(i) => {
        return LocationData[i].OneLocation + ' ' + LocationData[i].OneHour + ' \n' + 
        LocationData[i].twoLocation + ' ' + LocationData[i].twoHour + ' \n' + 
        LocationData[i].threeLocation + ' ' + LocationData[i].threeHour + ' \n' +
        LocationData[i].fourLocation + ' ' + LocationData[i].fourHour + ' \n';
    }
    return (
        <View style={styles.container}>
          <ScrollView style={{ alignSelf: 'stretch' }}>
            {
              LocationData
                ? LocationData.map((param, i) => {
                  return (
                    <DropDownItem
                      key={i}
                      style={styles.dropDownItem}
                      contentVisible={false}
                      invisibleImage={IC_ARR_DOWN}
                      visibleImage={IC_ARR_UP}
                      header={
                        <View style={styles.header}>
                          <Text style={{
                            fontSize: 16,
                            color: 'blue',
                          }}>{param.NameTrack}</Text>
                        </View>
                      }
                    >
                        <Text style={[styles.txt,
                        {fontSize: 16,},]}>{addBody(i)}
                        </Text>
                        <View style={{alignItems: 'flex-end'}}>
                        <TouchableOpacity>
                        <Icon name="edit" color="black" onPress={()=> 
                          navigation.navigate('UpdateTrack',{paramKey:LocationData[i],indexKey: i})} />
                        </TouchableOpacity>

                        </View>

                    </DropDownItem>
                  );
                })
                : null
            }
            <View style={{ height: 96 }}/>
          </ScrollView>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 60,
    },
    header: {
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTxt: {
      fontSize: 12,
      color: 'rgb(74,74,74)',
      marginRight: 60,
      flexWrap: 'wrap',
    },
    txt: {
      fontSize: 14,
    },
  });
export default Track;