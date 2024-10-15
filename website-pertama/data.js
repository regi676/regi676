const nama = "regiana"
let usia = 20;

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <18) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia< 25) {
        generasi = "generasi dewasa";
    }
    else if (usia > 25) {
        generasi = "generasi tua";
    }
    else {
        generasi = "generasi bayi";
    }

    return console.log('generasi saya adalah', generasi);

}

console.log(nama);
console.log(usia);

generateBiodata();