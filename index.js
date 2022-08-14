import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// import config database
import db from "./config/database.js";

// import routers
import mahasiswaRouter from "./routers/mahasiswa.router.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db
    .on("error", () => {
        console.log("koneksi database mongodb atlas error");
    })
    .once("open", () => {
        console.log("koneksi mongodb atlas berhasil");
    });

app.use("/api/v1", mahasiswaRouter);

app.listen(port, () => {
    console.log(`server berjalan pada port : ${port}`);
});