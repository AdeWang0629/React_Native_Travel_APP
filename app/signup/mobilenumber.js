import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import InActiveButton from '../../src/components/InactiveButton';

const MobileNumber = () => {

  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Sing Up with Mobile Number
        </Text>
        <View style={styles.input_container}>
          <Icon name="phone" size={20} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Phone'
          />
        </View>
        <View style={styles.input_container}>
          <Icon name="lock" size={20} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Password'
          />
        </View>
        <View style={styles.input_container}>
          <Icon name="lock" size={20} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Re-Password'
          />
        </View>
        <View style={{height: 160}}>

        </View>

        <InActiveButton text='SIGN UP' link='/signup/verify' />

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
    paddingVertical: 100,
    textAlign: 'center'
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.BLACK,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    marginBottom: 20
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },

});

export default MobileNumber;