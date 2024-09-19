import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginUserHandler({ email, password }){
    setIsAuthenticating(true)
    try {
      const token = await loginUser(email, password)
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('❌ Login failed!', 'Could not log you in, please check your credentials.')      
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Logging in.."/>
  }

  return <AuthContent isLogin onAuthenticate={loginUserHandler} />;
}

export default LoginScreen;
