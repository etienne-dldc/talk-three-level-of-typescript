import { Expr } from "@dldc/zendb";
import { db } from "../implem/db";
import { schema } from "./33.schema";

const userWithGroup = db.exec(
  schema.users
    .query()
    .andFilterEqual({ name: "Paul Bocuse" })
    .innerJoin(schema.groups.query(), "group", (c) =>
      Expr.equal(c.groupId, c.group.id)
    )
    .select((c) => ({
      id: c.id,
      name: c.name,
      groupName: c.group.name,
    }))
    .one()
);
