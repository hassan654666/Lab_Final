import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { supabase } from '@/lib/supabase';
import { useNavigation } from 'expo-router';
import CheckBox from 'expo-checkbox';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);
  const navigation = useNavigation();

  // useEffect(() => {

  //   const checkSession = async () => {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     navigation.navigate(session ? 'Home' : 'LoginPage');
  //     console.log(supabase.auth.getSession())
  //   };

  //   checkSession();
  // }, [email]);

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      Alert.alert('Success', 'You are logged in!');
      if(seller){
        navigation.navigate('sellerDash');
      }
      else{
        navigation.navigate('Home');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, {marginBottom: 50}]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style= {{fontSize: 26, color: 'Black', }}>Seller?</Text>
      <CheckBox value={seller} onValueChange={setSeller} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '50%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#007BFF',
  },
  googleButton: {
    marginTop: 40,
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    marginTop: 20,
    backgroundColor: '#4267B2',
    //marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 20,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
