import express from "express";
import { create, destroy, destroyAll, findAll, findOne, updateOne } from "../controllers/mahasiswa.controller.js";

const mahasiswaRouter = express.Router();

mahasiswaRouter
    .get("/mahasiswa", findAll)
    .get("/mahasiswa/:id", findOne)
    .post("/mahasiswa/create", create)
    .put("/mahasiswa/update/:id", updateOne)
    .delete("/mahasiswa/destroy/:id", destroy)
    .delete("/mahasiswa/destroy", destroyAll);

export default mahasiswaRouter;