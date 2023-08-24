import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import data from '../../data'
import COLORS from '../../constants/Colors'

const CarouselCards = ({type, renderItem, sliderWidth, itemWidth}) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  const handleNext = () => {
    if (isCarousel.current) {
      isCarousel.current.snapToNext()
    }
  }
  
  return (
    <View>
      <Carousel
        layout={type}
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: COLORS.PINK
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <View>

      </View>
    </View>
  )
}

export default CarouselCards