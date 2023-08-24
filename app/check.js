import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import COLORS from '../src/constants/Colors';
import FONT from '../src/constants/Fonts';
import { router } from 'expo-router';

const Check = () => {

  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.image_container}>
          <TouchableOpacity onPress={() =>  router.push('/carousel')}>
            <Image
              source={require('../assets/check.png')}
            />
          </TouchableOpacity>
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
  image_container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 250,
    paddingBottom: 150,
  }
});

export default Check;