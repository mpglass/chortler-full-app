import { Query } from './index';

const all = () => Query('SELECT * FROM Chortles');

const one = async (id: number) => Query('SELECT * FROM Chortles WHERE id = ?', [id])

const insert = (userid: number, content: string) => Query('INSERT INTO Chortles (userid, content) VALUE (?, ?)',[userid, content]);

//  const update = (userid: number, content: string) => Query('UPDATE Chortles SET (userid?, content?) VALUE = '' WHERE id = ',[]);
// const insert = () => Query('',[]);


export default {
    all,
    one, 
    insert
};