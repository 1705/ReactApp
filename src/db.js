import Dexie from 'dexie';

const db = new Dexie('DictionariesDB');
db.version(1).stores({
  dictionaries: '++id, title',
  records: '++id, dictionary_title, domain, range'
});

export default db;

