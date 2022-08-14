import monggose from "mongoose";

monggose.connect("mongodb+srv://rudiwidodo271:akusayangkamu123@cluster0.jvy7jmc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = monggose.connection;

export default db;