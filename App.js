import Profile from './Screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import Notification from './Screens/Notification';
import ChooseLocation from './Screens/ChooseLocation';
import Camera from './Screens/Camera';
import Recommendation from './Screens/Recommendation';
import Track from './Screens/Track';
import { React, useState, useEffect, useCallback } from 'react';
import { stars } from './data/fav';
import { Card } from 'react-native-elements';
import {
  Text, View, SafeAreaView, Dimensions, Image, Button
  , ScrollView, FlatList, StyleSheet, TouchableOpacity, RefreshControl
} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel from 'react-native-snap-carousel';
import UpdateTrack from './Screens/UpdateTrack';
const Stack = createNativeStackNavigator();
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const arr1 = [];
function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Places' component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Icon name="home" color='black' size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name='Profile Page' component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size }) => (
            <Icon name="person" color="black" size={size} />
          ),
        }}
      />
      <Tab.Screen name='Favorite' component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ size }) => (
            <Icon name="star" color="black" size={size} />
          ),
        }}

      />

      <Tab.Screen name='Track' component={Track}
        options={{
          tabBarLabel: 'Track',
          tabBarIcon: ({ size }) => (
            <Icon name="star" color="black" size={size} />
          ),
        }}

      />
      <Tab.Screen name='notification' component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ size }) => (
            <Icon name="notifications" color="black" size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}
var ShowMore = ""
var intro = ""
var properties = ""
const Favorite = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
    }, 1000);
  }, []);
  useEffect(()=>{
    onRefresh()
  },[])
  console.log({ stars })
  // const Item = ({ title }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );
  // const renderItem = ({ item }) => (
  //   <Item title={item} />
  // );
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {
        stars.map((item, id) => {
          return (
            <View style={styles.item} key={item}>
              {item == "Aquarium" ? <View><Image source={require("./Images/1.png")} style={{ alignSelf: "center", width: 200, height: 200, borderRadius: 300 }} /><Text style={styles.title}>{item}</Text></View> : null}
              {item == "Kings City" ? <View><Image source={require("./Images/2.png")} style={{ width: 200, alignSelf: "center", height: 200, borderRadius: 300 }} /><Text style={styles.title}>{item}</Text></View> : null}
              {item == "Eilat City Museum" ? <View><Image source={require("./Images/3.png")} style={{ width: 200, height: 200, alignSelf: "center", borderRadius: 300 }} /><Text style={styles.title}>{item}</Text></View> : null}
              {item == "Taba Border Crossing" ? <View><Image source={require("./Images/4.png")} style={{ width: 200, height: 200, borderRadius: 300, alignSelf: "center" }} /><Text style={styles.title}>{item}</Text></View> : null}
              {item == "Wadi Araba Crossing" ? <View><Image source={require("./Images/5.png")} style={{ width: 200, height: 200, alignSelf: "center", borderRadius: 300 }} /><Text style={styles.title}>{item}</Text></View> : null}
            </View>
          )
        })
      }
    </ScrollView >
  )
}
  const Items = () => {

    p1 = JSON.stringify(ShowMore.properties[0].name)
    p11 = JSON.stringify(ShowMore.properties[0].value)

    p2 = JSON.stringify(ShowMore.properties[0].name)
    p22 = JSON.stringify(ShowMore.properties[1].value)

    intro = JSON.stringify(ShowMore.intro)
    ShowMore = JSON.stringify(ShowMore.name)

    ShowMore = ShowMore.replace(/"/, "")
    ShowMore = ShowMore.replace(/"/, "")

  
    return (
      <View>
        <View>
          <Text style={{ fontSize: 30 }}>{ShowMore}</Text>
          <Text style={styles.intro}>{intro}</Text>
          <Text style={{ fontSize: 30 }}>Properties</Text>
          <Text style={{ fontSize: 20 } }>{p1} : {p11}</Text>
          <Text style={{ fontSize: 20 } } >{p2} : {p22}</Text>
        </View>
      </View>
    )
}
const Home = ({ navigation }) => {



  let SelectAllLocation = [];
  const [isDone, setIsDone] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inxData, setinxData] = useState(0);
  const [LoDa, setloDa] = useState([]);
  const [selectData, setSelectData] = useState(null);


  const MapArrLocations = (data) => {
    let arr = data.map((item) => {
      item.isSelected = false;
      return { ...item }

    })
    console.log('ADDing...');
    setSelectData(arr);
  };

  const MapArrAllSelectLocations = () => {
    for (let i = 0; i < arr1.length; i++) {
      SelectAllLocation[i] = selectData[arr1[i]];
    }
    console.log(SelectAllLocation.length);
    //AllDataPlace.push(selectData);
    navigation.replace('ChooseLocation', { paramKey: SelectAllLocation, DataKey: selectData });
    };

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const addPlsaces = (index) => {
    setinxData(index);


    if (!(selectData[index].isSelected)) {
      if (arr1.length < 4) {
        arr1.push(index);
        setIsDone(false);
        selectData[index].isSelected = true;
      }
    }
    else {
      selectData[index].isSelected = false;
      removeItemOnce(arr1, index);
      setIsDone(false)
    }
    if (arr1.length == 4) { setIsDone(true); }
    console.log('ADdD select ' + selectData[index].isSelected);
    console.log('ADD ff    ' + index);
    console.log(arr1 + " length : " + arr1.length);
  }

  const renderItem = ({ item, index }) => {
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
        <Image source={{ uri: item.images.length > 0 ? item.images[0].sizes.medium.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20190827162820' }} style={{ width: 200, height: 200, borderRadius: 100 }} />
        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}> {item.name}</Text>
        <Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>{(item.score).toFixed(2)}</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("ItemPage"); ShowMore = item }}>

          <Text style={{ color: 'green', marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>show more</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { if (stars.includes(item.name)) { var x = stars.indexOf(item.name); stars.pop(x); alert("Item Removed From Favorites") } else { stars.push(item.name); AsyncStorage.setItem("Fav", item.name); AsyncStorage.getItem("Fav") } }}>
          <Icon name='star'></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button style={styles.buttinContainer} title={selectData[index].isSelected ? "Delete" : "Add"}
            onPress={() => addPlsaces(index)}>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(async () => {
    await fetch("https://www.triposo.com/api/20220104/poi.json?location_id=Eilat&fields=all&count=10&account=8T0XUHMG&token=yyu117n9kp0vnas7s5ogaotfyu6dqqco", {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    }).then(res => {
      console.log('res status', res.status);
      console.log('res ok', res.ok);
      return res.json();
    }).then(
      (result) => { setData(result.results); MapArrLocations(result.results); setLoading(false); },
      (error) => { return null; })
  }, [10]);

};

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} ></Stack.Screen>
        <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
        <Stack.Screen name="Profile" component={TabBar}></Stack.Screen>
        <Stack.Screen name="ChooseLocation" component={ChooseLocation}></Stack.Screen>
        <Stack.Screen name="UpdateTrack" component={UpdateTrack}></Stack.Screen>
        <Stack.Screen name="Track" component={Track}></Stack.Screen>
        <Stack.Screen name="Recommendation" component={Recommendation}></Stack.Screen>



        <Stack.Screen name="Home" component={TabBar} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Favorite" component={TabBar} />
        <Stack.Screen name="Notification" component={TabBar} />
        {/* <Stack.Screen name="Track" component={TabBar} /> */}
        <Stack.Screen name="ItemPage" component={Items} />

      </Stack.Navigator>
    </NavigationContainer>

  );


}


const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  isVisible: {
    width: 30, height: 30,
    padding: 10,

  },
  disabled: {
    padding: 10,
    display: 'none'
  },
  header: {
    height: 15,
    width: '100%',
    backgroundColor: 'pink'
  },
  intro: {
    fontSize: 17,
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
  bottomCard: {
    width: '100%',
    padding: 30,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginTop: 40
  },
  inpuStyle: {
    backgroundColor: 'green',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 20
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 60,

  },
  textStyle: { fontSize: 15, color: '#fff' },
  buttinContainer: {
    width: 45,
    height: 45,
    borderRadius: 21,
    right: -320,

    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .8,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "green",
  },
  plus: {
    fontSize: 40,
    color: '#fff',
    position: 'absolute',
    top: -6,
    left: 9,
  }
});