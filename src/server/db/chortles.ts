import { Query } from './index';

const all = () => Query('SELECT * FROM Chortles');

const one = async (id: number) => Query('SELECT * FROM Chortles WHERE id = ?', [id])

const insert = (userid: number, content: string) => Query('INSERT INTO Chortles (userid, content) VALUE (?, ?)',[userid, content]);

const update = (content: string, id: number) => Query('UPDATE Chortles SET content = ? WHERE id = ?',[content, id]);

const destroy = (id:number) => Query('DELETE FROM Chortles WHERE id = ?',[id]);


export default {
    all,
    one, 
    insert, 
    update, 
    destroy
};