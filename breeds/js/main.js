
let breeds = [
    ['breed1', ['sub-breed1-1', 'sub-breed1-2']],
    ['breed2', []],
    ['breed3', ['sub-breed3-1']],
];


for (let breed1 = 0; breed1 < breeds.length; breed1++) {
    for (let breed2 = 1; breed2 < breeds[breed1].length; breed2++) {
        console.log(breeds[breed1][0]);
        for (let breed3 = 0; breed3 < breeds[breed1][breed2].length; breed3++) {
            console.log(breeds[breed1][breed2][breed3]);
        }
    }
}
