/**
 * Exemple 2: Typer les routes et réponses d'une API
 */

import { createApi } from "../implem/safe-api-path";

interface ApiRoutes {
  "/user": User;
  "/posts": Post[];
}

const api = createApi<ApiRoutes>();

const postsResponse = await api("/posts");

console.log(`Api version id ${postsResponse.apiVersion}`);
console.log(`User id is ${postsResponse.data.length}`);

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
