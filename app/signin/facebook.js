import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';

const Facebook = () => {

  return (
    <SafeAreaView style={styles.area_container}>
        <View style={styles.header_container}>
            <View style={styles.centeredContainer}>
                <Icon name="arrow-left" size={30} color={COLORS.WHITE} style={styles.icon} />
                <Text style={styles.text}>Log in with your Facebook</Text>
            </View>
        </View>
        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../../assets/facebook.png')}
                />

                <View style={styles.content_first}>
                    <Text style={{fontWeight: FONT.BOLD, marginRight: 5}}>Yeah Travel</Text>
                    <Text>wil receive:</Text>
                </View>
                <Text style={{marginTop: 10}}>Your name and profile picture, friend ist,</Text>   
                <Text style={{marginTop: 10}}>birthday and email address</Text>  

                <View style={styles.content_second}>
                    <Icon name="edit" size={30} style={{marginRight: 10}} color='#031e5f' />
                    <Text style={{marginTop: 3, color: '#031e5f'}}>Edit This</Text>
                </View>

                <View style={styles.content_third}>
                    <Icon name="lock" size={30} style={{marginRight: 10}} />
                    <Text style={{marginTop: 3}}>This doesn't let the app post to Facebook</Text>
                </View>
                
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>  router.push('/signin/forgetpassword')}>
                <Text style={{color: COLORS.WHITE}}>CONTINUE</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    area_container: {
        fontStyle: FONT.PRIMARY
    },
    header_container: {
        backgroundColor: '#031e5f',
        height: 60,
    },    
    centeredContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    scrollView: {
        paddingHorizontal: 15,
    },
    icon: {
        marginLeft: 20,
        marginRight: 30,
    },
    text: {
        color: COLORS.WHITE,
        fontSize: 18,
        paddingTop: 4
    },
    container: {
        alignItems: 'center',
        paddingTop: 100
    },
    stretch: {
        width: 70,
        height: 70
    },
    content_first: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 3
    },
    content_second: {
        flexDirection: 'row',
        paddingTop: 50,
        paddingBottom: 80
    },
    content_third: {
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#031e5f',
        height: 50,
        borderRadius: 50,
        marginTop: 20,
        justifyContent: 'center',
    }
});

export default Facebook;