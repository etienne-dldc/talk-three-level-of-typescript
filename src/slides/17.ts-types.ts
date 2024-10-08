/**
 * Types primitifs
 */
const answer: number = 42;
const name: string = "Paul";
const isGood: boolean = true;

// Il y a aussi les types `null` et `undefined`

/**
 * Paramètres et retour de fonction
 */

function add(a: number, b: number): number {
  return a + b;
}

/**
 * Tableaux
 */

const lotoResults: number[] = [42, 3, 15, 7, 9, 12];

/**
 * Objets
 */

interface Person {
  firstName: string;
  lastName: string;
}

const paul: Person = {
  firstName: "Paul",
  lastName: "Bocuse",
};

/**
 * Le jocker 🃏
 */
const mystery: any = {};
