import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

const Viewtrip = ({navigation}) => 
{
  return(
      <View>
        <View style={styles.btn1}>
            <Button borderRadius="20"
             title="BOOKINGS"
             />
        </View>
        <View style={styles.btn2}>
            <Button title="UPCOMING" />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    btn1: {
        marginTop: '50%',
        padding: 15,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 25,
    },
    btn2: {
        marginTop: '50%',
        padding: 15,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 45,
    },
})
export default Viewtrip;