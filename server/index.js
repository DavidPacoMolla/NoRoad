const mongoose = require("mongoose");
const app = require("./app");

const port = 1337;

const hostMongoDB = process.env.MONGO_DB || "localhost";
const urlMongoDB = `mongodb://${hostMongoDB}:27017/noroad`;

mongoose.set("strictQuery", false);

// Initiate the connection to the database
mongoose.connect(urlMongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, res) => {
    try {
        if (!err) {
            console.log("Connected to MongoDB");

            // Start listening
            app.listen(port, () => {
                console.log(`Server listening on ${port}`);
            });
        }
        else {
            throw err;
        }
    }
    catch (error) {
        console.error(error);
    }
});