// assignments:-

const express = require("express");
const app = express();

const user = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

// const jhon = user[0].kidneys;
// const numofkidneys = jhon.length
// console.log(jhon);
// console.log(numofkidneys)

app.use(express.json());

app.get("/", function(req, res){
    const jhonKidneys = user[0].kidneys;
    const numberOfKidneys = jhonKidneys.length;
    let numberOfHealthyKidneys = 0;
    for( let i=0; i<numberOfKidneys; i++ ){
        if( jhonKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    }) 
})

// add new kidney:-

app.post("/", function(req, res){
    let isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req, res){
    for( let i=0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({})
})
app.listen(3000)