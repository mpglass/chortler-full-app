import { Query } from './index';

const all = async () => Query('SELECT * FROM Chortles');
const one = async (id: number) => Query('SELECT * FROM Chortles WHERE id = ?', [id])

export default {
    all,
    one
};