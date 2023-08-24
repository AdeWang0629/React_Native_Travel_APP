import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  Text
} from 'react-native';
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import InActiveButton from '../../src/components/InactiveButton';

const Index = () => {

  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>

        <View style={{height: 250}}>
        </View>
        
        <View style={styles.input_container}>
          <Icon name="user" size={20} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Username'
          />
        </View>
        <View style={styles.input_container}>
          <Icon name="lock" size={20} color={COLORS.BLACK} style={styles.icon} />
          <TextInput
            style={styles.input}
            value='Password'
          />
        </View>
        <View style={styles.fixToText}>
          <Text style={{fontWeight: FONT.BOLD, marginRight: 5}}>Forget</Text>
          <Text>your password</Text>
        </View>

        <View style={{height: 120}}>
        </View>

        <InActiveButton text='SIGN IN' link='' />
        <InActiveButton text='LOG IN WITH FACEBOOK' link='signin/facebook' facebook={true} />

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
    justifyContent: 'space-start',
  },
});

export default Index;