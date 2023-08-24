import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import CarouselCards from '../../src/components/Carousel/CarouselCards'
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import CustomCircleButton from '../../src/components/CustomCircleButton';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../src/components/Carousel/CarouselCardItem'

export default function Index() {
  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.carousel_container}>
          <CarouselCards type='tinder' renderItem={CarouselCardItem} sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_WIDTH} />
        </View>
        <View style={styles.fixToText}>
          <Text style={{fontWeight:FONT.BOLD, fontSize: 20, marginTop: 10}}>SKIP</Text>
          <CustomCircleButton link='setting'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area_container: {
    flex: 1,
    fontStyle: FONT.PRIMARY
  },
  scrollView: {
    backgroundColor: COLORS.BASIC_BACKGROUND,
    paddingHorizontal: 15,
  },
  carousel_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});