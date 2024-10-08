/**
 * Typer la response d'une API
 */

import { api } from "../implem/api-base";

const userResponse: UserResponse = await api("/user");

console.log(`Api version id ${userResponse.apiVersion}`);
console.log(`Request took ${userResponse.responseTime}ms`);
console.log(`User id is ${userResponse.data.id}`);

const postsResponse: PostsResponse = await api("/posts");

// API response types

export interface UserResponse {
  responseTime: number;
  apiVersion: string;
  data: User;
}

export interface PostsResponse {
  responseTime: number;
  apiVersion: string;
  data: Post[];
}

// Data types

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
