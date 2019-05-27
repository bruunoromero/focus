import { db, mapSnapshot } from "../firebase";

export const getTasks = () =>
  db
    .collection("tasks")
    .get()
    .then(mapSnapshot);
