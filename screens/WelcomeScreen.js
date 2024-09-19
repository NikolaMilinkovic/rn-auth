import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import { PROTECTED_MESSAGE_ENDPOINT } from "@env"

function WelcomeScreen() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function getWelcomeMessage(){
      const response = await axios.get(
        `${PROTECTED_MESSAGE_ENDPOINT}${authCtx.token}`
      )
      return response.data;
    }
    setWelcomeMessage(getWelcomeMessage());
  }, [authCtx])


  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{welcomeMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
