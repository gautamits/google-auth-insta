import React from 'react';
import logo from './logo.svg';
import './App.css';import { GoogleLogin } from 'react-google-login';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="753999909949-dag78tucj9or3v1aci69jghdshrt5d9c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;

//client secret pO_iAfHJZ_fpkFlVrzU_QCDh
