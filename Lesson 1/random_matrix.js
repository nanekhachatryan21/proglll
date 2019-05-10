let height = 30;  
let length = 100;  
let grassCount = 120;
let grassEaterCount = 10;
let matrix = [];
for (let y = 0; y < height; y++) {
    matrix.push([]);
    for (let x = 0; x < length; x++) {
        matrix[i].push(0);
    }
}
function setup() {
    let a = 0;
    while (a < grassCount) {
        let x = Math.floor(random(0, length));
        let y = Math.floor(random(0, height));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            a++;
        }
    }

}


