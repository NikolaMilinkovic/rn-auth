import { SIGNUP_ENDPOINT, SIGNIN_ENDPOINT } from "@env"
import axios from "axios"

export async function createUser(email, password){
  const response = await axios.post(
    `${SIGNUP_ENDPOINT}`,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )

  const token = response.data.idToken;
  return token;
}

export async function loginUser(email, password){
  const response = await axios.post(SIGNIN_ENDPOINT, {
    email: email,
    password: password,
    returnSecureToken: true
  });

  const token = response.data.idToken;
  return token;
}