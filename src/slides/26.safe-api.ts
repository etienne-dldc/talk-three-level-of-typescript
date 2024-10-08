/**
 * Exemple 1: Réutiliser le type de réponse de l'API
 */
import { api } from "../implem/safe-api";

const userResponse = await api<User>("/user");

console.log(`Api version id ${userResponse.apiVersion}`);
console.log(`User id is ${userResponse.data.id}`);

const postsResponse = await api<Post[]>("/posts");

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
