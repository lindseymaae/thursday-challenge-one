const router = require('express').Router();
const gameData = require('../modules/game.data');

router.get('/', (req,res) =>{
    res.send(gameData)
})