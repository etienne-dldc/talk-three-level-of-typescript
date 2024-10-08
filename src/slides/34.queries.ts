import { db } from "../implem/db";
import { schema } from "./33.schema";

const queryResult = db.exec(schema.users.query().all());
