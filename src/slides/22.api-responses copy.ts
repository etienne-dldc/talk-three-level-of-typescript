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

export interface ArticleData {
  id: number;
  title: string;
  content: string;
}

export interface ArticleResponse {
  responseTime: number;
  apiVersion: string;
  data: ArticleData;
}
