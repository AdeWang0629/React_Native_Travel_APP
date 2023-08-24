import { 
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import COLORS from '../constants/Colors';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const InActiveButton = ({ text, link, facebook }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>  router.push(`${link}`)}>
        <View style={styles.fixToText}>
          {facebook ? (<Icon name="facebook" size={18} color={COLORS.WHITE} style={styles.icon} />) : ''}
          <Text style={{color: COLORS.WHITE}}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.PINK,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  fixToText: {
    flexDirection: 'row',
  }
});

export default InActiveButton;