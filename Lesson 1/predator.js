class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5;
        this.directions = [];
    }
    allDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
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
            if (matrix[y][x] == 1) {
                matrix[y][x] = 3;
                matrix[this.y][this.x] = 1;
            }
            else {
                matrix[y][x] = 3;
                matrix[this.y][this.x] = 0;
            }
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let fundCords = this.chooseCell(2);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            if (matrix[this.y][this.x] == 1) {
                matrix[y][x] = 3;
                matrix[this.y][this.x] = 1;
            }
            else {
                matrix[y][x] = 3;
                matrix[this.y][this.x] = 0;
            }
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (let i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
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
    mul() {
        let fundCords = this.chooseCell(0);
        let cord = random(fundCords);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            this.multiply++;
            let predator = new GrassEater(x, y);
            predatorArr.push(predator);
            if (matrix[this.y][this.x] == 1) {
                matrix[y][x] == 1;
            }
            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }
    die() {
        if (matrix[this.y][this.x] == 1) {
            matrix[this.y][this.y] = 1;
        }
        else {
            matrix[this.y][this.x] = 0;
        }
        for (let i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
            }
        }
    }
}