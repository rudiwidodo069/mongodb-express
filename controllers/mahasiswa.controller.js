import mahasiswaModel from "../models/mahasiswa.model.js";

export const findAll = async (req, res) => {
    try {
        const reponse = await mahasiswaModel.find();
        res.status(200).json({
            status: "ok",
            message: "data seluruh mahasiswa",
            data: reponse,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await mahasiswaModel.findById(id);
        res.status(200).json({
            status: "ok",
            message: "data mahasiswa berdasarkan id",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const create = async (req, res) => {
    try {
        const data = {
            nama: req.body.nama,
            npm: req.body.npm,
            kelas: req.body.kelas,
            jurusan: req.body.jurusan,
            jenis_kelamin: req.body.jenis_kelamin,
            no_telp: req.body.no_telp,
            keterangan: req.body.keterangan,
        };
        const response = await mahasiswaModel.create(data);
        res.status(200).json({
            status: "ok",
            message: "data berhasil ditambahkan",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const updateOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = {
            nama: req.body.nama,
            npm: req.body.npm,
            kelas: req.body.kelas,
            jurusan: req.body.jurusan,
            jenis_kelamin: req.body.jenis_kelamin,
            no_telp: req.body.no_telp,
            keterangan: req.body.keterangan,
        };
        const response = await mahasiswaModel.updateOne({
            _id: id
        }, {
            $set: data
        });
        res.status(200).json({
            status: "ok",
            message: "data berhasil diupdate",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await mahasiswaModel.deleteOne({ _id: id });
        res.status(200).json({
            status: "ok",
            message: "data berhasil dihapus berdasarkan id",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const destroyAll = async (req, res) => {
    try {
        const response = await mahasiswaModel.deleteMany();
        res.status(200).json({
            status: "ok",
            message: "hapus semua data berhasil",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};  