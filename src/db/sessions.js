import db from "../db/db";

const addSession = (user) => {
  return db.user.add(user);
};

const deleteSession = (userId) => {
  return db.user.delete(userId);
};

const findSession = () => {
  return db.user.where("id").above(0).toArray();
};

export {
  addSession,
  deleteSession,
  findSession,
}
