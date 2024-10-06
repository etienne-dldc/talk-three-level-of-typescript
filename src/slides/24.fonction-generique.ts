import { ApiResponse, ArticleData, UserData } from "./22.type-generique";

// Les fonctions peuvent accepter des types génériques.
// Lorsqu'on appelle la fonction, on doit passer le type en argument en plus des arguments de la fonction.
export function api<T>(url: string): ApiResponse<T> {
  // ...
  throw new Error("Not implemented");
}

const userResponse = api<UserData>("/users");
const articleResponse = api<ArticleData>("/articles");
