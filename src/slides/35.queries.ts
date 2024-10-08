import { db } from "../implem/db";
import { schema } from "./32.schema";

const queryResult = db.exec(schema.users.query().all());
