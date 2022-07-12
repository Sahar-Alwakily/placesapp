
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';
const LogIn = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submitFun = () => {
    fetch('http://194.90.158.74/bgroup61/test2/tar5/api/Users?pass=' + password + '&userName=' + userName, {
      method: 'Get',
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
          alert("Authentication failed");
        return res.json()
      })
      .then(
        (error) => {
          console.log("err post=", error);
        }
      );
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
                <Icon name='place' style={styles.Text} size={40} color='green'></Icon>

                <Text style={{ color: 'green', fontStyle: 'italic', fontWeight: 'bold', fontSize: 17 }}>Enjoy It</Text>
              </View>
              <Text style={styles.loginTitleText} >Welcome to Enjoy It</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel} onChangeText={name => setUserName(name)}>Name</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel} onChangeText={pass => setPassword(pass)}>Password</Text>
                <TextInput
                   secureTextEntry={passwordVisible}
                   style={styles.input}
                
                  label='password'
                />
              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText} onPress={() => navigation.navigate('Home')}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.registerText}>
                  Don't have an account?
                </Text>
                <Text style={styles.registerText} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>


              </TouchableOpacity>

                

              

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: 'green',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: 'green',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '18 %',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 20,
    color: 'green',
    marginTop: 10
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  }, input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
export default LogIn;