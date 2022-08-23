import React, { useState } from 'react';
import {Button} from "../components/general/button";

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const onLogin = () => {
        console.log(username, password);
    };

  return (
      <div>
          <input type={'text'} name="username" onChange={(e) => setUsername(e.target.value)}/>
          <input type={'password'} name="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={onLogin}>Login NOW!</Button>
      </div>
  );
};

export default Login;
