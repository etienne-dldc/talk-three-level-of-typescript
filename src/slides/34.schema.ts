/**
 * Définir un schéma de base de données
 */

import { Column, Table } from "@dldc/zendb";
import { nanoid } from "nanoid";

export const schema = Table.declareMany({
  tasks: {
    id: Column.text().primary(),
    title: Column.text(),
    description: Column.text(),
    completed: Column.boolean(),
  },
  users: {
    id: Column.text()
      .primary()
      .defaultValue(() => nanoid()),
    name: Column.text(),
    email: Column.text(),
    displayName: Column.text().nullable(),
    groupId: Column.text().nullable(),
    updatedAt: Column.date().nullable(),
  },
  joinUsersTasks: {
    user_id: Column.text().primary(),
    task_id: Column.text().primary(),
  },
  groups: {
    id: Column.text().primary(),
    name: Column.text(),
  },
});
