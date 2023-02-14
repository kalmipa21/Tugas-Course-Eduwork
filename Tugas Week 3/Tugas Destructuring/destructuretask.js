const bedak = ["Wardah", "Mustika Ratu", "Citra", "Pixie"];
const [w,mr,c,p] = bedak;

console.log(w, mr, c, p);

let set = {
    Jenis: "Sweater",
    Ukuran: "XL",
    Harga: 96000
}
let {Jenis,Ukuran,Harga: Jual}= set;
console.log("res Set", Jenis, Ukuran, Jual);  

let clothing = [
    {
        Jenis: "Sweater",
        Ukuran: "XL",
        Harga: 96000
    },{
        Jenis: "Celana",
        Ukuran: 32,
        Harga: 150000
    },{
        Jenis: "Kaos",
        Ukuran: "L",
        Harga: 120000
    }
];

let [o,u,l,ik={Jenis:"Ikat pinggang", Ukuran: 32, Harga: 15000}] = clothing;
console.log("Res Clothing",o,u,l,ik); 