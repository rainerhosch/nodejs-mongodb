const { MongoClient } = require("mongodb");
const ObjectID = require("mongodb").ObjectId;

// url cloudh
// const uri = "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";

// url local
const uri = "mongodb://127.0.0.1:27017";
const dbName = "test_db";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log("Koneksi ke server gagal!");
  }
  //   console.log("Berhasil terkoneksi ke server!");

  //   pelih database
  const db = client.db(dbName);

  //   Create 1 data ke collection
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "Agus Racing",
  //       email: "agus@gmail.com",
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("gagal insert data!");
  //       }
  //       console.log(result);
  //     }
  //   );

  // Create Banyak data ke collection
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "Rizky Oktan",
  //         email: "rz.oktan@gmail.com",
  //       },
  //       {
  //         nama: "Bayu Prasetio",
  //         email: "bayprass@gmail.com",
  //       },
  //       {
  //         nama: "Dadang Modif",
  //         email: "dadangmodif@gmail.com",
  //       },
  //     ],
  //     (err, result) => {
  //       if (err) {
  //         return console.log("gagal insert data!");
  //       }
  //       console.log(result);
  //     }
  //   );

  //   Menampilkan data yang ada di collection mahasiswa
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find()
  //       .toArray((err, result) => {
  //         console.log(result);
  //       })
  //   );

  //   Menampilkan data berdasarkan kriteria/filter
  //   console.log(
  //     db
  //       .collection("mahasiswa")
  //       .find({ _id: ObjectID("619856c171a7ca15019eb3cb") })
  //       .toArray((err, result) => {
  //         console.log(result);
  //       })
  //   );

  //  Mengubah data berdasarkan filter/kriteria
  //   const updateCollection = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectID("619856c171a7ca15019eb3cb"),
  //     },
  //     {
  //       $set: {
  //         nama: "Rizky Oktan",
  //         email: "rizkyokt1994@gmail.com",
  //       },
  //     }
  //   );
  //   updateCollection
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // Menghapus 1 data dari collection
  //   db.collection("mahasiswa")
  //     .deleteOne({
  //       _id: ObjectID("619856c171a7ca15019eb3cd"),
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});
