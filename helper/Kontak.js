const { constants } = require("buffer");
const fs = require("fs");
const { resolve } = require("path");
const chalk = require("chalk");
const validator = require("validator");

// cek folder data dan creat jika folder tidak ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// create file json
const dataPath = `${dirPath}/data_kontak.json`;
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadKontak = () => {
  const fileBuffer = fs.readFileSync("data/data_kontak.json", "utf-8");
  const data_kontak = JSON.parse(fileBuffer);
  return data_kontak;
};
const simpanKontak = (nama, email, noHp) => {
  const kontak = { nama, email, noHp };
  // const fileBuffer = fs.readFileSync("data/data_kontak.json", "utf-8");
  // const data_kontak = JSON.parse(fileBuffer);
  const data_kontak = loadKontak();

  // cek email duplikat
  const duplikat = data_kontak.find(
    (kontak) => kontak.email === email || kontak.noHP === noHp
  );
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold(
        "Email atau No HP sudah ada pada data kontak, silahkan gunakan email atau nomor hp lain."
      )
    );
    return false;
  }

  //  validasi email addres
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(
        chalk.yellow.inverse.bold("Harap masukan alamat email yang benar!")
      );
      return false;
    }
  }

  //  validasi nomor handphone
  if (noHp) {
    if (!validator.isMobilePhone(noHp, "id-ID")) {
      console.log(chalk.yellow.inverse.bold("Nomor handphone tidak valid!"));
      return false;
    }
  }
  data_kontak.push(kontak);
  fs.writeFileSync("data/data_kontak.json", JSON.stringify(data_kontak));

  console.log(chalk.green.inverse.bold("Data telah berhasil di simpan."));
};

const listKontak = () => {
  const data_kontak = loadKontak();
  console.log(chalk.cyan.inverse.bold(`Daftar kontak : `));
  data_kontak.forEach((kontak, i) => {
    console.log(`${i + 1}.${kontak.nama} - ${kontak.noHp}`);
  });
};

const detailKontak = (noHp) => {
  const data_kontak = loadKontak();
  const kontak_detail = data_kontak.find(
    (kontak) => kontak.noHp.toLowerCase() === noHp.toLowerCase()
  );
  // kodisi jika data kontak tidak ditemukan
  if (!kontak_detail) {
    console.log(
      chalk.red.inverse.bold(`Data kontak dengan no ${noHp}, tidak ditemukan!`)
    );
    return false;
  }

  // kodisi ketika data kontak ditemukan
  console.log(
    chalk.cyan.inverse.bold(
      `Nama : ${kontak_detail.nama} | Email : ${kontak_detail.email} | No HP : ${kontak_detail.noHp}`
    )
  );
  // console.log(kontak_detail.email);
  // console.log(kontak_detail.noHp);
};

// menghapus kontak berdasarkan no handphone
const deleteKontak = (noHp) => {
  const data_kontak = loadKontak();
  const data_kontak_copy = data_kontak.filter(
    (kontak) => kontak.noHp.toLowerCase() != noHp.toLowerCase()
  );

  if (data_kontak.length === data_kontak_copy.length) {
    console.log(
      chalk.red.inverse.bold(`Data kontak dengan no ${noHp}, tidak ditemukan!`)
    );
    return false;
  }

  fs.writeFileSync("data/data_kontak.json", JSON.stringify(data_kontak_copy));

  console.log(
    chalk.green.inverse.bold(`Data kontak dengan no ${noHp}, berhasil dihapus.`)
  );
};

module.exports = { simpanKontak, listKontak, detailKontak, deleteKontak };
