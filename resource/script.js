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

let game = document.getElementById("game");

function createsBoxWithNumber(list, length) { //list contiene array numeri, length contiene lunghezza array
    /* let content = list[i]; */

    for (let i=0; i < length; i++) {
        let box = document.createElement('div');
        box.classList.add("box");
        box.innerHTML = (list[i]);
        game.appendChild(box);
    }
    
    /* for (let i = 0; i < length; i++) {
        
    }
    game.appendChild(box); */
    return "ciao";
}

let listB = [2, 5, 7, 8];
lenghtB = listB.length;
createsBoxWithNumber(listB, lenghtB);
