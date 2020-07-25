import * as express from "express";

import db from "../db";

const router = express.Router();


router.get("/api/chortles", async (req, res) => {
  try {
    const chortles = await db.Chortles.all()
    res.json(chortles);
    // res.json(await db.Chortles.all());
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Lady ate my code...please let me know', error});
  }
});

router.get("/api/chortles/:id", async (req, res) => {
  const chortleid = Number(req.params.id);
  try {
    const [chortle] = await db.Chortles.one(chortleid);
    res.json(chortle);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({msg:'Lady ate my code...please let me know', error});
  }
});

export default router;














