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

/* let list = [];
generateRandomNumber(6, 12, list, 5);
console.log(list); */

let game = document.getElementById("game");

/* questa funzione crea dei box con all'interno dei numeri presi da un arrey */
function createsBoxWithNumber(list, length) { //list contiene array numeri, length contiene lunghezza array

    for (let i = 0; i < length; i++) {
        let box = document.createElement('div');
        box.classList.add("box");
        box.innerHTML = (list[i]);
        game.appendChild(box);
    }

    return "ciao";
}

/* let listB = [2, 5, 7, 8];
lenghtB = listB.length;
createsBoxWithNumber(listB, lenghtB); */

let play = document.getElementById("play");
let listy = [];
function playGame() {
    game.innerHTML = "";


    let listr = generateRandomNumber(1, 100, listy, 5);
    console.log(listy);
    createsBoxWithNumber(listr, listr.length)
    //timeout
    
    
    setTimeout(myFunction, 2000);
}

const myFunction = () => {
    let box = querySelectorAll("box");
    box.classList.add("d-none");
};

play.addEventListener("click", function () {
    /* let listy = [];
    
    let listr = generateRandomNumber(1,100,listy,5);
    console.log(listy);
    createsBoxWithNumber(listr, listr.length)
    */
    playGame();

})

let buttonSendNumbers = document.getElementById("buttonSendNumbers");

//raccolgo numeri dell'utente
let userNumbers = [];
buttonSendNumbers.addEventListener("click", function (e) {
    e.preventDefault();
    const listNumber = document.querySelectorAll(".f");
    console.log(listNumber);

    listNumber.forEach(element => {
        userNumbers.push(parseInt(element.value));
        console.log(element.value);
    });
    console.log(userNumbers);
    createsBoxWithNumber(userNumbers, userNumbers.length);
    //confronto i numeri
    let resultList = [];
    userNumbers.forEach(element => {
        let confront = listy.includes(element);
        if (confront) {
            resultList.push(element);
            result = true;
        }
        console.log(resultList);
        console.log(confront);
    })

})


/* let resultlist = "";
userNumbers.forEach(element => {
    let confront = listy.includes(element);
    if (confront) {
        resultlist.push(element);

    }
 console.log(resultlist);
 console.log(confront);
}) */
