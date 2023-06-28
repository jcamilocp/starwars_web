import Dexie from 'dexie';

const db = new Dexie('sessions');

db.version(1).stores({
  user: '++id, email, token',
});

export default db;
