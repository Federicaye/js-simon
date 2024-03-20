function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* funzione che genera un arrey di numeri casuali diversi */
function generateRandomNumber(min, max, list, howMany) {
    let check = false;
    while (list.length < howMany) {
        let randomNumber = getRndInteger(min, max);

        if (!list.includes(randomNumber)) {
            list.push(randomNumber);
            check = true;
        }
    }
    return list;
}

let list = [];
generateRandomNumber(6, 12, list, 5);
console.log(list);