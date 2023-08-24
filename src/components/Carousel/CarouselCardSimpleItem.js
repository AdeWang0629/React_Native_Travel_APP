import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import COLORS from '../../constants/Colors'
import FONT from '../../constants/Fonts'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4)
export const ITEM_FULL_WIDTH = Dimensions.get('window').width

const CarouselCardSimpleItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={require("../../../assets/carousel-1.png")}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BASIC_BACKGROUND,
    borderRadius: 8,
    width: ITEM_WIDTH,
  },
  image: {
    width: ITEM_WIDTH,
    height: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 3,
      elevation: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  header: {
    color: COLORS.PINK,
    fontSize: 28,
    fontWeight: FONT.BOLD,
    paddingVertical: 30,
    textAlign: 'center',
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
  }
})

export default CarouselCardSimpleItem;