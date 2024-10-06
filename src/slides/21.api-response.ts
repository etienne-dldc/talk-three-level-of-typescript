export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface UserResponse {
  responseTime: number;
  apiVersion: string;
  data: UserData;
}
