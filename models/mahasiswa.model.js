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
    createdOn: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("mahasiswa", MahasiswaModel);