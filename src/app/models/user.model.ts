export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
}

export interface UserObject {
  message: string;
  user: User;
  sessionToken: any;
}
