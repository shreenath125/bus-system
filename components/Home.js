import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

const Home = ({navigation}) => 
{
  return(
      <View>
        <View style={styles.btn1}>
            <Button title="BOOK / UPDATE" onPress={() =>navigation.navigate('Seat')}/>
        </View>
        <View style={styles.btn1}>
            <Button title="JOURNEY DETAILS" onPress={() =>navigation.navigate('Viewtrip')}/>
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
    },
    btn2: {

    },
})
export default Home;