import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel from 'react-native-snap-carousel';
import React, { useState, useEffect } from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View, Button, Dimensions, SafeAreaView } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const Recommendation = ({ navigation }) => {
    const [info, setInfo] = useState("null");
    const [info2, setInfo2] = useState();
    const [loadingg, setLoadingg] = useState(false);
    const [data, setData] = useState(null);
    var items =[];

    const renderItem = ({ item, index }) => {
        console.log("MY ONLY ITEM IS :",JSON.stringify(item))
        return (
            <View
                style={{
                    borderWidth: 1,
                    padding: 20,
                    borderRadius: 20,
                    borderColor: 'green',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    width: 250,
                    marginTop: 20

                }}>

                {/* <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}> {item}</Text> */}
                {<Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>{JSON.stringify(item.name)}</Text>}
                { <Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }} onPress={() => navigation.navigate('ItemPage', { item: item })}>show more</Text> }
                <Icon name='star'></Icon>

            </View>
        );
    }

  
    const fun = () =>{
         {
             fetch("http://194.90.158.74/bgroup61/test2/tar5/api/Recommendation?userId=90", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })
            }).then(res=> {
                console.log('res status', res.status);
                return res.json();
            }).then(
                (result) => { console.log(result);
                     setData(result);
                     setInfo(result);
                     calltripeso(result);
                    },
                (error) => {return null;})
            }
            if (data != null) {
                console.log('user places : ', data);
           }
        }


    const calltripeso = (async (info) => {
        console.log('print info part 2 :', info)
        const t = Promise.all(info.map(item => getItem(item)))
        t !== null ? setLoadingg(true) : null;

    })

    const getItem = async (item) => {

        await fetch("https://www.triposo.com/api/20220104/poi.json?id=" + item + "&fields=all&account=8T0XUHMG&token=yyu117n9kp0vnas7s5ogaotfyu6dqqco", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        }).then(res=> {
            console.log('res status', res.status);
            return res.json();
        }).then((result) => //{setInfo2(info2 =>([...info2, result.results]));
            items.push(result.results)
    )
        if(items.length >1) {
            const obj = Object.assign({}, items);
            MapArr(obj)
            console.log("get item from triposo func : ",obj)

        }

}

const MapArr = (data) =>{
    let arr = data.map((item)=>{
      item.isSelected = false;
      return {...item}
    })
    console.log("get item from triposo func : ",obj)
    setInfo2(arr);
  };

    return (

        loadingg === true ? <ScrollView>
            <View >
                <Text style={{ color: 'white', marginVertical: 20, fontSize: 20, fontWeight: 'bold', backgroundColor: 'green', marginTop: 25, textAlign: 'center', height: 50 }}>Recommended For You</Text>
                <SafeAreaView>
                    <Carousel
                        data={info2}//item
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                    />
                </SafeAreaView>

            </View>
        </ScrollView> : <View><TouchableOpacity onPress={()=>fun()}><Text>press</Text></TouchableOpacity></View>
    )
}
export default Recommendation;