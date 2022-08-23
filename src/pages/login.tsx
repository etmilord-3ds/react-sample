import React, { useState } from 'react';
import {Button} from "../components/general/button";
import axios from "axios";

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onLogin = async () => {
        console.log(username, password);
        setIsLoading(true);
        const result = await axios.post(
            'https://58iiwrc1gf.execute-api.us-west-1.amazonaws.com/prod/login',
            { username, password },
            {
                headers: {
                    'x-api-key': 'TJbulKjIHU7VxpjDVGARI6mc3TgpWuMs3GId6r6i',
                }
            }
        );
        setIsLoading(false);
        console.log(result);
    };

    // Option 2 change the layout if the page is loading
    /**
    if (isLoading) {
        return <div>...Logging you in</div>;
    }
     */

  return (
      <div>
          <input type={'text'} name="username" onChange={(e) => setUsername(e.target.value)}/>
          <input type={'password'} name="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button disabled={isLoading} onClick={onLogin}>Login NOW!</Button>
      </div>
  );
};

export default Login;
