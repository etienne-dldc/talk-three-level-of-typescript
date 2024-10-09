import { db } from "../implem/db";
import { schema } from "./34.schema";

const inserted = db.exec(
  schema.users.insert({
    name: "Paul Bocuse",
    displayName: "Paul",
    email: "paul.bocuse@lyon.de",
    groupId: null,
    updatedAt: new Date(),
  })
);
