import { items } from "./produk.js";
import { harga } from "./harga.js";
console.log(harga);
console.log(items);
let etalase = items.map((item, index)=>{
    return{
        ...item,
        price: harga[index],
    }
});
console.log(etalase);
new gridjs.Grid({
    columns: [ "Produk", "Brand", "Ukuran", "Price"],
    data: etalase,
  }).render(document.getElementById("wrapper"));