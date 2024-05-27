const { MongoClient } = require("mongodb")

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect("mongodb://localhost:27017/Rei_Comissions")
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}





// ----------- ChatGPT NO SIRVE --------------------------//



// const { MongoClient } = require("mongodb");

// let dbConnection;

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
//             .then((client) => {
//                 dbConnection = client.db("Rei_Comissions"); // Specify the database name here
//                 return cb();
//             })
//             .catch(err => {
//                 console.error("Failed to connect to the database", err);
//                 return cb(err);
//             });
//     },
//     getDb: () => dbConnection
// };
