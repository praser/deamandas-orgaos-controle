import User from './user';

interface JwtPayload {
  iat: number;
  iss: string;
  nbf: number;
  exp: number;
  user: User;
}

export default JwtPayload;
