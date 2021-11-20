const yargs = require("yargs");
const {
  simpanKontak,
  listKontak,
  detailKontak,
  deleteKontak,
} = require("./helper/Kontak");
yargs
  .command({
    command: "add",
    describe: "Menambahkan data kontak baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Alamat email",
        demandOption: true,
        type: "string",
      },
      noHp: {
        describe: "Nomor handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanKontak(argv.nama, argv.email, argv.noHp);
      // const kontak = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHp: argv.noHp,
      // };
      // console.log(kontak);
    },
  })
  .demandCommand();

// menampilkan daftar kontak nama dan no handphone
yargs.command({
  command: "list",
  describe: "Menampilkan daftar kontak (nama dan no hp)",
  handler() {
    listKontak();
  },
});

// menampilkan detail dari sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail dari suatu kontak berdasarkan no handphone",
  builder: {
    noHp: {
      describe: "Nomor handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailKontak(argv.noHp);
  },
});

// menghapus kontak berdasarkan no handphone
yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan no handphone",
  builder: {
    noHp: {
      describe: "Nomor handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteKontak(argv.noHp);
  },
});

yargs.parse();
