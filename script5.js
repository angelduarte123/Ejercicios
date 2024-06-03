let array1 = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;
    for (elemento of arr) {
       if (elemento > 0) {
            cantidad++;
       }
    }
    return cantidad;
}

let resultado1 = cuantosPositivos(array1);
console.log(resultado1);