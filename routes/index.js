import express from 'express';
import brief from "../data/brief.json" assert { type: 'json' };

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {brief});
});

export default router;
