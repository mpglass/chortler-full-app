import * as mysql from "mysql";

import Chortles from './chortles';
import Mentions from './mentions'; 
import Users from './Users';
import Locations from './locations';


const pool = mysql.createPool({
    user: 'chortler_admin',
    password: 'hello123',
    host: 'localhost',
    database: 'Chortler'
});


export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
    Chortles,
    Mentions,
    Users, 
    Locations
};

