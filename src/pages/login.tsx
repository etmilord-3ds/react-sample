import axios from "axios";
import React, { useState } from 'react';
import {Button} from "../components/general/button";
import {setCreds} from "../store/auth";
import {useDispatch} from "react-redux";
import {DASHBOARD_ROUTE} from "../constants/routes";
import {useNavigate} from "react-router-dom";

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        dispatch(setCreds(result.data));
        navigate(`/${DASHBOARD_ROUTE}`);
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
          <Button disabled={isLoading} name="submit" onClick={onLogin}>Login NOW!</Button>
      </div>
  );
};

export default Login;
