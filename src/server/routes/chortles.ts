import * as express from "express";
import db from "../db";

const router = express.Router();


router.get('/:id?', async (req, res) => {
  const chortleid = Number(req.params.id);
  try {
    if (chortleid) {
      const [chortle] = await db.Chortles.one(chortleid);
    res.json(chortle);
    } else {
      const chortles = await db.Chortles.all()
    res.json(chortles);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({msg:'Lady ate my code...please let me know', error});
  }
});

router.post('/', async (req, res) => {
  const newChortle = req.body;
  try { 
    const cannedResponse = await db.Chortles.insert(newChortle.userid, newChortle.content);
    res.status(201).json({ msg: 'new Chortle created', id: cannedResponse.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Lady ate my code...please let me know', error});
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const updatedChortle = req.body;
  try { 
    const cannedResponse = await db.Chortles.update(updatedChortle.content, id);
    res.json({ msg: 'Chortle updated', id, cannedResponse });
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Lady ate my code...please let me know', error});
  }
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id); 
  try {
    await db.Chortles.destroy(id); 
    res.json({ msg: 'note deleted', id });
  } catch (error) {
    console.log(error); 
    res.status(500).json({ msg: 'Lady ate my code...please let me know', error});
  }
});

export default router;