import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image
} from 'react-native';
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import InActiveButton from '../../src/components/InactiveButton';

const Verify = () => {

  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Verification Code
        </Text>
        
        <View style={styles.fixToText}>
            <View style={styles.circle}>
              <Text style={{fontWeight: FONT.BOLD, fontSize: 30}}>
                0
              </Text>
            </View>
            <View style={styles.circle}>
              <Text>
              </Text>
            </View>
            <View style={styles.circle}>
              <Text>
              </Text>
            </View>
            <View style={styles.circle}>
              <Text>
              </Text>
            </View>
        </View>

        <View style={{height: 30}}>

        </View>

        <InActiveButton text='SUBMIT' link='/check'/>

        <View style={styles.fixToText}>
          <Text style={{fontWeight: FONT.BOLD, marginRight: 5}}>Resend</Text>
          <Text>verification code</Text>
        </View>
          
        <View style={styles.fixToPhoneNumber}>
          <Text style={styles.phoneNumber}>
            1
          </Text>
          <Text style={styles.phoneNumber}>
            2
          </Text>
          <Text style={styles.phoneNumber}>
            3
          </Text>
        </View>

        <View style={styles.fixToText}>
          <Text style={styles.phoneNumber}>
            4
          </Text>
          <Text style={styles.phoneNumber}>
            5
          </Text>
          <Text style={styles.phoneNumber}>
            6
          </Text>
        </View>

        <View style={styles.fixToText}>
          <Text style={styles.phoneNumber}>
            7
          </Text>
          <Text style={styles.phoneNumber}>
            8
          </Text>
          <Text style={styles.phoneNumber}>
            9
          </Text>
        </View>

        <View style={styles.fixToText}>
          <Text style={styles.phoneLastNumber}>
            0
          </Text>   
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area_container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    fontStyle: FONT.PRIMARY
  },
  scrollView: {
    backgroundColor: COLORS.BASIC_BACKGROUND,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    color: COLORS.BROWN,
    fontFamily: FONT.PRIMARY,
    fontWeight: FONT.BOLD,
    paddingHorizontal: 10,
    paddingTop: 100,
    paddingBottom: 50,
    textAlign: 'center'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: COLORS.WHITE
  },
  fixToPhoneNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  phoneNumber: {
    fontSize: 40,
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  phoneLastNumber: {
    fontSize: 40,
    paddingVertical: 10
  },
});

export default Verify;