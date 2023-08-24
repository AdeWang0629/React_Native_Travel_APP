import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View
} from 'react-native';
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import InActiveButton from '../../src/components/InactiveButton';

const ForgetPassword = () => {

  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Forgot Password
        </Text>
        <View style={styles.input_container}>
          <Icon name="envelope" size={16} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Email'
          />
        </View>

        <InActiveButton text='SUBMIT' link='/signin/changepassword' />

        <View style={styles.fixToText}>
          <Text>Check</Text>
          <Text style={{fontWeight: FONT.BOLD, marginLeft: 5}}>email</Text>
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
    paddingVertical: 120,
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default ForgetPassword;