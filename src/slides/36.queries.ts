import { db } from "../implem/db";
import { schema } from "./34.schema";

const queryResult = db.exec(schema.users.query().all());
