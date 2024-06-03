// crear algoritmo que tome un array de objetos y devuelva un array de pares

let array2 = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

let pares = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Chanchito" }],
];

function toPairs(arr) {
    let pairs = [];
    for (idx1 in arr) {
        let elemento = arr[idx1];
        pairs [idx1] = [elemento.id, elemento];
    }
}

let resultado3 = toPairs(array2);
console.log(resultado3);