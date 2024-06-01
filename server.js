const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Rei:1panes+rapido@cluster0.g5cagdc.mongodb.net/rei_comissions")

//create a data schema 
const comissionsSchema = {
    name: String,
    notes: String,
    type: String,
    render: String,
    color: String,
    extras: Array
}

const comission = mongoose.model("comissions", comissionsSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/ComissionsPage.html") //test
})

app.post("/", (req, res) => {
    let newComission = new comission({  //test
        name: req.body.name,
        notes: req.body.notes,
        type: req.body.type,
        render: req.body.render,
        color: req.body.color,
        extras: req.body.extras
    })
    newComission.save();
    res.redirect("/temp.html");
});
//app.post

app.listen(3000, function() {
    console.log("server is running on 3000");
})
















// const express = require("express")
// const { connectToDb, getDb, MongoClient } = require("./db")


// // init app & middleware
// const app = express()
// app.use(express.json())

// // db connection
// let db

// //create a data schema //test
// const notesSchema = {
//     name: String,
//     notes: String,
//     type: String,
//     render: String,
//     color: String,
//     extras: String
// }

// const Note = MongoClient.model("Note", notesSchema)



// connectToDb((err) => {
//     if (!err) {
//         app.listen(3000, () => {
//             console.log("app listening on port 3000")
//         })
//         db = getDb()     //interact with database
//     }
// })

// // routes
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/") //test
//     let comissions = []

//     db.collection("/")  // toArray - forEach "to do somethig with the database"
//         .find() //cursor //if empty returns all collection "comissions" in this case
//         .sort({ type: 1 })    
//         .forEach(comission => comissions.push(comission)) 
//         .then(() => {
//             res.status(200).json(comissions)
//         })
//         .catch(() => {
//             res.status(500).json({error:"Could not find the documents"})
//          })
// })

// app.post("/", (req, res) => {
//     let newNote = new Note({  //test
//         name: req.body.name,
//         notes: req.body.notes,
//         type: req.bod.type,
//         render: req.body.render,
//         color: req.body.color,
//         extras: req.body.extras
//     })
//     newNote.save();
// //test


//     const comission = req.body
//     db.collection("/")
//         .insertOne(comission)
//         .then(result => {
//             res.status(201).json(result)
//         })
//         .catch(err => {
//             res.status(500).json({err: "Could not create a new document"})
//         })
// })


// //mongodb+srv://<Rei>:<1panes+rapido>@cluster0.g5cagdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0