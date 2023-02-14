let username = prompt(`Silahkan isi dengan "Let me in"`);
const silahkan = username == "Let me in" && prompt(`Silahkan masukan "1234"`);
const selamat = silahkan == 1234 || alert("Anda dilarang masuk");

const kaos = [
    {
        Merk: "Under Armour",
        Bahan: "Cotton combed",
        Harga: 125000
    },{
        Merk: "Dagadu",
        Bahan: "Cotton bamboo",
        Harga: 175000
    },{
        Merk: "League",
        Bahan: "Spandex",
        Harga: 90000
    },{
        Merk: "Cardinal",
        Bahan: "Cotton combed",
        Harga: 150000
    }
]

const ListHarga = kaos.map((produk)=> produk.Merk);
console.log(ListHarga);
const ListDiskon = kaos.filter((diskon)=> diskon.Harga >= 150000);
console.log(ListDiskon);


let image = ["url"]

export { image }

import { image } from 'image.js' 