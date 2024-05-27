const express = require("express")
const { connectToDb, getDb } = require("./db")

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("app listening on port 3000")
        })
        db = getDb()     //interact with database
    }
})

// routes
app.get("/Comissions", (req, res) => {
    let comissions = []

    db.collection("Comissions")  // toArray - forEach "to do somethig with the database"
        .find() //cursor //if empty returns all collection "comissions" in this case
        .sort({ type: 1 })    
        .forEach(comission => comissions.push(comission)) 
        .then(() => {
            res.status(200).json(comissions)
        })
        .catch(() => {
            res.status(500).json({error:"Could not find the documents"})
         })
})






// ----------- losing my mind.js------------------///


// const express = require("express")

// // init app & middleware
// const app = express()

// // db conect

// app.listen(3000, () => {
//     console.log("app listening on port 3000")
// })

// // routes
// app.get("/Comissions", (req, res) => {
//     res.json({mssg:"it works?"})
// })



// ----------- ChatGPT NO SIRVE --------------------------//






// const express = require("express");
// const { connectToDb, getDb } = require("./db");

// // init app & middleware
// const app = express();

// // db connection
// let db;

// connectToDb((err) => {
//     if (!err) {
//         db = getDb(); // Interact with the database
//         app.listen(3000, () => {
//             console.log("app listening on port 3000");
//         });
//     } else {
//         console.error("Failed to connect to the database", err);
//     }
// });

// // routes
// app.get("/Commissions", async (req, res) => {  // Changed route to "/Commissions"
//     try {
//         const commissions = await db.collection("Commissions") // Changed to "Commissions" for consistency
//             .find()
//             .sort({ type: 1 })
//             .toArray();
//         res.status(200).json(commissions);
//     } catch (err) {
//         res.status(500).json({ error: "Could not find the documents" });
//     }
// });

// module.exports = app;