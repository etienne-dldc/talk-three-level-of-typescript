// Les types génériques permettent de définir des types dynamiques.
// Similaire à une fonction, on peut "passer" des types en arguments et obtenir un type en retour.

export interface ApiResponse<T> {
  responseTime: number;
  apiVersion: string;
  data: T;
}

export type UserResponse = ApiResponse<UserData>;

export type ArticleResponse = ApiResponse<ArticleData>;

// Data types

export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface ArticleData {
  id: number;
  title: string;
  content: string;
}
