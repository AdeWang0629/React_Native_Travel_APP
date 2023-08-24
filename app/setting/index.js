import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import CarouselCards from '../../src/components/Carousel/CarouselCards'
import COLORS from '../../src/constants/Colors';
import FONT from '../../src/constants/Fonts';
import CustomCircleButton from '../../src/components/CustomCircleButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import CarouselCardSimpleItem, { SLIDER_WIDTH, ITEM_WIDTH} from '../../src/components/Carousel/CarouselCardSimpleItem';
import CarouselCardFullItem, { ITEM_FULL_WIDTH } from '../../src/components/Carousel/CarouselCardFullItem';

export default function Index() {
  return (
    <SafeAreaView style={styles.area_container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header_text}>
          Hey, Ed!
        </Text>
        <Text style={styles.text}>
          Start your adventure
        </Text>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', width: 300, margin: 'auto', textAlign: 'center'}}>
            <View>
                <View style={styles.circle}>
                    <Icon name="phone" size={30} color={COLORS.WHITE} />
                </View>
                <Text style={styles.text}>
                    Flight
                </Text>
            </View>
            <View>
                <View style={styles.circle}>
                    <Icon name="home" size={30} color={COLORS.WHITE} />
                </View>
                <Text style={styles.text}>
                    Hotel
                </Text>
            </View>
            <View>
                <View style={styles.circle}>
                    <Icon name="car" size={30} color={COLORS.WHITE} />
                </View>
                <Text style={styles.text}>
                    Car
                </Text>
            </View>
        </View>

        <Text style={styles.primary_text}>
            Recent Searches
        </Text>
        <View style={styles.carousel_container}>
          <CarouselCards type='default' renderItem={CarouselCardSimpleItem} sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_WIDTH}/>
        </View>

        <Text style={styles.primary_text}>
            Discover Places
        </Text>
        <View style={styles.carousel_container}>
          <CarouselCards type='tinder' renderItem={CarouselCardFullItem} sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_FULL_WIDTH}/>
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
  header_text: {
    fontSize: 30,
    color: COLORS.BROWN,
    fontFamily: FONT.PRIMARY,
    fontWeight: FONT.BOLD,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 30,
  },
  text: {
    fontSize: 15,
    fontFamily: FONT.PRIMARY,
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
  primary_text: {
    fontSize: 15,
    fontFamily: FONT.PRIMARY,
    fontWeight: FONT.BOLD,
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PINK,
    marginBottom: 10
  },
});