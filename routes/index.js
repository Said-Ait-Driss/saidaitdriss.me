import express from 'express';
import profile from "../data/profile.json" assert { type: 'json' };

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {brief:profile.brief});
});

router.get("/about",(req,res)=>{
    res.render("about",{...profile})
})

router.get("/work",(req,res)=>{
    res.render("work",{brief:profile.brief,experiences:profile.experiences})
})


export default router;
