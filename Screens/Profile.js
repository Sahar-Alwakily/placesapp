import { View, Image, Text, StyleSheet, TextInput,ScrollView  } from 'react-native';
import { Icon } from 'react-native-elements';
var ImgUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

export default function Profile({ navigation,route ,props}) {
    const user ={
        id:1,
        name:'Ahmad',
        address:'Baqa',
        phoneNumber:'0503',
        userName:'Ahmad@123',
        gender:'male',
        birthDate:'22/03/2000',
        password:'aaa123'
    }
    return (
    <ScrollView>
        <View style={styles.container}>  
            <View style={{
                flex: 0.4, justifyContent: 'center', alignItems: 'center'
            }}>
                <Image
                    source={{ uri: ImgUrl}}
                    style={{ width: 150, height: 150, borderWidth: 1, borderColor: 'green', margin: 20, borderRadius: 180 }}
                />
                 <Icon name='camera' type='font-awesome' style={styles.Text} onPress={() => navigation.navigate('Camera')} size={30} marginTop={3}  marginLeft={2} color='white'></Icon>
            </View>
            <Text style={styles.tex}>Name: {user.name}</Text>
            <Text style={styles.tex}>UserName: {user.userName}</Text>
            <TextInput placeholder='Password' placeholderTextColor='#fff' secureTextEntry={true} style={styles.TextInput} />
            <TextInput placeholder={user.phoneNumber} placeholderTextColor='#fff' style={styles.TextInput} />
            <Text placeholder={user.address} placeholderTextColor='#fff' style={styles.TextInput}>Address</Text>
            <Text style={styles.tex}>Gender: {user.gender}</Text>
            <Text style={styles.tex}>BirthDate: {user.birthDate}</Text>
            <Text style={styles.Text}>Save</Text>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumseagreen',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    tex: {
        color: 'black',
        borderWidth: 2,
        borderColor: 'white',
        width: 300,
        height: 40,
        padding: 5,
        marginTop: 15
    },
    TextInput: {

        borderWidth: 2,
        borderColor: 'white',
        color: 'black',
        width: 300,
        height: 40,
        padding: 5,
        marginTop: 15

    },
    Text: {
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 2,
        color: 'black',
        width: 95,
        height: 30,
        textAlign: 'center',
        marginBottom: 30,
        padding: 3
    }
});