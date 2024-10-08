/**
 * Typer la response d'une API
 */

import { api } from "../implem/api-base";

export interface UserResponse {
  responseTime: number;
  apiVersion: string;
  data: User;
}

export interface PostResponse {
  responseTime: number;
  apiVersion: string;
  data: Post[];
}

const userResponse: UserResponse = await api("/user");

console.log(`Api version id ${userResponse.apiVersion}`);
console.log(`User id is ${userResponse.data.id}`);

// types

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}
