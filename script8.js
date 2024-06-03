// crear un algoritmo que devuelva un array de objetos en base a pares

let pairs2 = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito" }],
];

let array3 = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function toCollection(arr) {
    let collection = [];
    for (idx2 in arr) {
        let elemento2 = arr[idx2];
        collection[idx2] = elemento2[1];
        collection[idx2] = elemento2[0];
    }

    return collection;
}

let resultado4 = toCollection(pairs2);
console.log(resultado4);