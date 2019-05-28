import { db, mapSnapshot } from "../firebase"

export const getTasks = () =>
  db
    .collection("tasks")
    .get()
    .then(mapSnapshot)

export const createTask = task => db.collection("tasks").add(task)
