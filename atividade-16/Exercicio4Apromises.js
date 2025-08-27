function Parte1(){
    for(var i = 1; i <= 10; i++){
        console.log("primeira parte: " + i);
    }
}

setTimeout(Parte1, 2000);

const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8')
    .then(data => {
        const registro = data.split("\n");
        registro.forEach((registro , index) => {
            console.log("segunda parte: " + registro + " " + index);
        });
    })
    .catch(err => {
        console.error("erro ao ler o arquivo: ", err);
    });