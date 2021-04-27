import React, { useCallback, useEffect, useState } from 'react';
import AuthResult from './models/authResult';
import CurrentUser from './models/currentUser';
import Dashboard from './pages/Dashboard';

const jwtKey = process.env.REACT_APP_JWT_KEY || 'jwt';
const currentUserApi = process.env.REACT_APP_CURRENT_USER_API || '';
const authApi = process.env.REACT_APP_AUTH_API || '';

const isLoggedin = (): boolean => !!sessionStorage.getItem(jwtKey);

const getCurrentUser = async (): Promise<string> => {
  const resCurrentUser = await fetch(currentUserApi);
  const currentUser: CurrentUser = await resCurrentUser.json();
  const { id } = currentUser;
  return id;
};

const postAuthenticate = async (username: string): Promise<AuthResult> => {
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
  return auth;
};

const App = (): JSX.Element => {
  const [jwt, setJwt] = useState(sessionStorage.getItem(jwtKey));

  const doLogin = useCallback(async () => {
    const currentUser = await getCurrentUser();
    const auth: AuthResult = await postAuthenticate(currentUser);

    const { result } = auth;
    if (result) {
      const { token } = auth;
      sessionStorage.setItem(jwtKey, token || '');
      setJwt(sessionStorage.getItem(jwtKey));
    }
  }, []);

  useEffect(() => {
    if (!isLoggedin()) doLogin();
  }, [doLogin, jwt]);

  const element = sessionStorage.getItem(jwtKey) ? (
    <Dashboard />
  ) : (
    <span data-testid="no-auth">
      Aguarde enquanto estamos fazendo o seu login
    </span>
  );

  return element;
};

export default App;
