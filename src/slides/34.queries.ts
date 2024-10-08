import { db } from "../implem/db";
import { schema } from "./33.schema";

const queryResult = db.exec(
  schema.users
    .query()
    .andFilterEqual({ name: "Paul Bocuse" })
    .select((c) => ({
      name: c.name,
      displayName: c.displayName,
      emailAddress: c.email,
      groupId: c.groupId,
    }))
    .all()
);
