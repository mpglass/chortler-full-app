import { Query } from './index';

const all = () => Query('SELECT * FROM Chortles');

const one = async (id: number) => Query('SELECT * FROM Chortles WHERE id = ?', [id])

const insert = () => Query('',[]);

export default {
    all,
    one
};