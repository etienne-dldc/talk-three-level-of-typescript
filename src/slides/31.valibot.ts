/**
 * Exemple 1: Valibot pour valider des données
 */

import * as v from "valibot";

const userSchema = v.object({
  id: v.number(),
  name: v.string(),
  email: v.nullable(v.string()),
  age: v.number(),
  isSubscribed: v.boolean(),
});

function validateUser(data: any) {
  const user = v.parse(userSchema, data);
  user.age.toFixed();
}

type User = v.InferOutput<typeof userSchema>;
