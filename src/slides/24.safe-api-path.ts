/**
 * Exemple 2: Typer les routes et réponses d'une API
 */

import { api } from "../implem/safe-api-path";

const postsResponse = await api("/posts");

console.log(`Api version is ${postsResponse.apiVersion}`);
console.log(`There are ${postsResponse.data.length} posts`);
