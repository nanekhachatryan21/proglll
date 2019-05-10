class MySecondCharacter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [];
    }
    allDirections() {
        this.directions = [
            [this.x, this.y - 4],
            [this.x, this.y + 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y]
        ]
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
        let fundCords3 = this.chooseCell(2);
        fundCords1 = fundCords1.concat(fundCords2);
        fundCords1 = fundCords1.concat(fundCords3);
        let cord = random(fundCords1);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        let fundCords1 = this.chooseCell(3);
        let fundCords2 = this.chooseCell(4);
        fundCords1 = fundCords1.concat(fundCords2);
        let cord = random(fundCords1);
        if (cord) {
            let x = cord[0];
            let y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy += 2;
            for (let i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            for (let i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
            for (let i in myFirstCharacterArr) {
                if (x == myFirstCharacterArr[i].x && y == myFirstCharacterArr[i].y) {
                    myFirstCharacterArr.splice(i, 1);
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
        for (let i in mySecondCharacterArr) {
            if (this.x == mySecondCharacterArr[i].x && this.y == mySecondCharacterArr[i].y) {
                mySecondCharacterArr.splice(i, 1);
            }
        }
    }
}