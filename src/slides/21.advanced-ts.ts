// Quelques exemples de syntaxe TypeScript plus avancée

// Type générique (un peu comme une fonction mais pour les types)
export interface ApiResponse<T> {
  responseTime: number;
  apiVersion: string;
  data: T;
}

// Mapped types pour transformer un type en un autre
type User = { name: string; email: string };
type UserGetters = { [K in keyof User]: () => User[K] };

// Ternaires (if / else) dans les types
type IsString<T> = T extends string ? "yes" : "no";

// Infer pour récupérer le type d'une fonction
type UserResponse = ApiResponse<User>;
type InferedUser = UserResponse extends ApiResponse<infer T> ? T : never;
