class MyFirstCharacter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [];
    }
    allDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1]
        ];
    }
    chooseCell(t) {
        this.allDirections();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        let fundCords1 = this.chooseCell(0);
        let fundCords2 = this.chooseCell(1);
        fundCords1 = fundCords1.concat(fundCords2);
        let cord = random(fundCords1);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let fundCords1 = this.chooseCell(2);
        let fundCords2 = this.chooseCell(3);
        fundCords1 = fundCords1.concat(fundCords2);
        let cord = random(fundCords1);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy += 2;
            for (let i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            for (let i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }
            for (let i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy < 0) {
                this.die();
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in myFirstCharacterArr) {
            if (this.x == myFirstCharacterArr[i].x && this.y == myFirstCharacterArr[i].y) {
                myFirstCharacterArr.splice(i, 1);
            }
        }
    }
}