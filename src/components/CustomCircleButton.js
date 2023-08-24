import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from "react-native";
  import COLORS from '../constants/Colors';
  import { router } from 'expo-router';
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  const CustomCircleButton = ({ link}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  router.push(`${link}`)}>
            <Icon name="arrow-right" size={20} color={COLORS.WHITE} style={styles.icon} />
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: COLORS.PINK,
      height: 50,
      width: 60,
      borderRadius: 28,
      justifyContent: 'center',
    },
  });
  
  export default CustomCircleButton;