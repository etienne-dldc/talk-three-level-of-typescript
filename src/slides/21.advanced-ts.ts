// Quelques exemples de syntaxes TypeScript plus avancées
// On se rapproche d'un langage à part entière

// Type générique (un peu comme une fonction mais pour les types)
export interface ApiResponse<T> {
  responseTime: number;
  apiVersion: string;
  data: T;
}

// Fonction avec un type générique
export type First = <T>(arr: T[]) => T | undefined;

// Extraire les propriétés d'un type
type Keys = keyof User;

// Mapped types pour transformer un type en un autre
type User = { name: string; email: string };
type UserGetters = { [K in keyof User]: () => User[K] };

// Ternaires (if / else) dans les types
type IsString<T> = T extends string ? "yes" : "no";
