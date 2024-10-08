/**
 * Exemple 4: Fonction matcher
 */
import { matcher } from "../implem/match-all";

function main(value: string) {
  const matched = matcher(value, {
    num: (val) => matchNum(val),
    star: (val) => matchStar(val),
    bool: (val) => matchBool(val),
  });

  if (matched && matched.key === "bool") {
    console.log(matched.value.bool);
  }
}

// Marcher functions

function matchNum(val: string): number | false {
  return Number.isNaN(parseInt(val)) ? false : parseInt(val);
}

function matchStar(val: string): boolean | false {
  return val === "*" ? true : false;
}

function matchBool(val: string): { bool: boolean } | false {
  return val === "true" || val === "false" ? { bool: val === "true" } : false;
}
