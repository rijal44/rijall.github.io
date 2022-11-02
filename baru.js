// const email = "yassertkj@gamil.com";
// const pass = "sembarang";

// if (email === "yassertkj@gamil.com"){
//     if ( pass === "sembarang"){
//         console.log("kamu berhasil login");
//     }else{
//         console.log("password salah");
//     }
//     }else{
//         console.log("email belum terdaftar");
//     }



// switch case

// const warna = "hitam";

// switch (warna) {
//     case "hitam":
//         console.log("warna hitam");
//         break;
//     case "putih":
//         console.log("warna putih");
//     break;
//     default:
//         console.log("tidak ada warna pilihan");
//         break;        
// }


var pendapatan = 300000;
var komisi, jasa, total;

if ( pendapatan >= 0 && pendapatan <= 200000){
    jasa = 10000;
    komisi = 0.1*pendapatan;
}
else if ( pendapatan <= 500000) 
{
    jasa = 20000;
    komisi = 0.15*pendapatan;
}
else
{
    jasa = 30000;
    komisi = 0.2*pendapatan;
}
{
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total);
}