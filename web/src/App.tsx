import React, { useCallback, useEffect, useState } from 'react';
import AuthResult from './models/authResult';
import CurrentUser from './models/currentUser';
import Dashboard from './pages/Dashboard';

const jwtKey = process.env.REACT_APP_JWT_KEY || 'jwt';
const currentUserApi = process.env.REACT_APP_CURRENT_USER_API || '';
const authApi = process.env.REACT_APP_AUTH_API || '';

const App = (): JSX.Element => {
  const [jwt, setJwt] = useState(sessionStorage.getItem(jwtKey));

  const login = useCallback(async () => {
    const resCurrentUser = await fetch(currentUserApi);
    const currentUser: CurrentUser = await resCurrentUser.json();
    const { id: username } = currentUser;
    const resAuth = await fetch(`${authApi}/authenticate/username`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        credentials: {
          username,
        },
      }),
    });
    const auth: AuthResult = await resAuth.json();
    const { result } = auth;
    if (result) {
      const { token } = auth;
      sessionStorage.setItem(jwtKey, token || '');
      setJwt(sessionStorage.getItem(jwtKey));
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem(jwtKey)) login();
  }, [login, jwt]);

  const element = sessionStorage.getItem(jwtKey || 'jwt') ? (
    <Dashboard />
  ) : (
    <span>Aguarde enquanto estamos fazendo o seu login</span>
  );

  return element;
};

export default App;
