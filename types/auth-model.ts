export interface LoginModel {
  email: string;
  password: string;
}


export interface PayloadModel {
  id: string;
  name: string;
  email: string;
}

export interface ResponseLoginModel {
  id: string;
  name: string;
  email: string;
  token: string;
}
