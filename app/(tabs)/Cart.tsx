import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Cart() {
  const navigation = useNavigation();

  const Buy = async () => {
    
  }

  const [data] = useState([

  ]);
    return (
      <View style= {styles.container}>
        {/* <Text style= {styles.title}>Cart</Text> */}
        <FlatList
                    style={styles.flatlist}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <Text style={styles.linkText}>{item.name}</Text>
                    )}
                    ListEmptyComponent={
                    <Text style={styles.linkText}>No items found</Text>
                    }
                    //horizontal= {false}
                    //numColumns={2}
                    //columnWrapperStyle={styles.columnWrapper}
                  />
        <TouchableOpacity style={[styles.button, {position: 'absolute', bottom: 70, }]} onPress={Buy}>
            <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <View style = {styles.navbar}>
                    <TouchableOpacity style ={styles.button} onPress={() => navigation.navigate('Home')}>
                      <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button} onPress={() => navigation.navigate('Cart')}>
                      <Text style={styles.buttonText}>Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.button} onPress={() => navigation.navigate('Schedule')}>
                      <Text style={styles.buttonText}>Schedule</Text>
                    </TouchableOpacity>
                  </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //padding: 16,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    navbar: {
      position: 'absolute', // Make the navbar absolute
      bottom: 0, // Stick it to the bottom
      flex: 0.08,
      flexDirection: 'row',
      width: '100%',
      //alignItems: 'center',
      gap: 10,
      backgroundColor: 'black',
      // padding: 15,
      // marginBottom: 10,
      // marginTop: 10,
    },
    button: {
      width: '32%',
      padding: 20,
      borderRadius: 8,
      alignItems: 'center',
      //backgroundColor: '#007BFF',
      backgroundColor: 'black',
    },
    buttonText: {
      color: '#f5f5f5',
      fontWeight: 'bold',
    },
    linkText: {
      width: '100%',
      color: '#007BFF',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginVertical: 10,
      textDecorationLine: 'underline',
      //margin: 10,
      padding: 30,
      borderRadius: 15,
      backgroundColor: '#f5f5f5',
    },
    flatlist: {
      width: 445, 
      backgroundColor: 'lightgrey', 
      padding: 20,
      alignContent: 'center',
      //alignItems: 'center',
    },
    columnWrapper: {
      justifyContent: 'space-around', // Add spacing between columns
    },
  })