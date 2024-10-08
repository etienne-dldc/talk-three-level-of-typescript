/**
 * Exemple 1: Typer les données de réponse d'une API
 */
import { api } from "../implem/safe-api";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const userResponse = await api<User>("users/1");

console.log(`Api version id ${userResponse.apiVersion}`);
console.log(`User id is ${userResponse.data.id}`);
