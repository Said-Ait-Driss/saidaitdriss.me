import express from 'express';
import profile from "../data/profile.json" assert { type: 'json' };
import sendMessageToChannel from '../helpers/bot.js';

const router = express.Router();

router.get('/', (req, res) => {
    const ip = req.clientIp
    
    console.log(ip);

    res.render('index', {brief:profile.brief});
});

router.get("/about",(req,res)=>{
    res.render("about",{...profile})
})

router.get("/work",(req,res)=>{
    res.render("work",{brief:profile.brief,experiences:profile.experiences,projects:profile.projects})
})

router.get("/contact",(req,res)=>{
    res.render("contact",{brief:profile.brief,contacts:profile.contacts})
})

router.post("/contact",(req,res)=>{
    const { email, message } = req.body

    if(!email || !message){
        res.render("partials/alerts/error",{message:"Please fill in all fields"})
    }else{
        res.render("partials/alerts/success",{message:"Your message has been sent successfully !"})
        sendMessageToChannel(`New message from : \n email : ${email} \n message: ${message}`)
    }

    
})


export default router;
