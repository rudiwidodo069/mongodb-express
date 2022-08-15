import mongoose from "mongoose";

const schema = mongoose.Schema;

const MahasiswaModel = new schema({
    nama: {
        type: String,
        require: true
    },
    npm: {
        type: String,
        require: true
    },
    kelas: {
        type: String,
        require: true
    },
    jurusan: {
        type: String,
        require: true
    },
    jenis_kelamin: {
        type: String,
        require: true,
    },
    no_telp: {
        type: String,
        require: true,
    },
    keterangan: {
        type: String,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("mahasiswa", MahasiswaModel);