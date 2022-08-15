import express from "express";
import { create, destroy, destroyAll, findAll, findOne, search, updateOne } from "../controllers/mahasiswa.controller.js";

const mahasiswaRouter = express.Router();

mahasiswaRouter
    .get("/mahasiswa", findAll)
    .get("/mahasiswa/:id", findOne)
    .post("/mahasiswa/create", create)
    .put("/mahasiswa/update/:id", updateOne)
    .delete("/mahasiswa/destroy/:id", destroy)
    .delete("/mahasiswa/destroy", destroyAll)
    .get("/mahasiswa/search/nama", search);

export default mahasiswaRouter;