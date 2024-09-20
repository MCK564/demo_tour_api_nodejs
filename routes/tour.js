const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const toursFilePath = path.join(__dirname, '../data/tours.json');



const readToursFromFile = () => {
    const data = fs.readFileSync(toursFilePath, 'utf8');
    return JSON.parse(data);
  };



const writeToursToFile = (tours) =>{
    fs.writeFileSync(toursFilePath, JSON.stringify(tours, null, 2), 'utf8');
};


router.get('/', (req, res) =>{
    const tours = readToursFromFile();
    res.json(tours);
});


router.get('/:id', (req, res )=>{
    const tours = readToursFromFile();
    const tour = tours.find(t => t.id === parseInt(req.params.id))
    if(!tour)return res.status(404).send("Tour is not exist");
    res.json(tour);
})



