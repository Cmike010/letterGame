function init(){
    setFirstWord();
}

$(document).ready(function(){
    $(document).keypress(function(e){
        isPressedLettersOnScreen(e.key);
    });
})

let wordContainer = ["peacock","woodpecker","crow","hawk","eagle","penquin","parrot","duck","pheasant","chicken"];
let wordsPassed = 0;
let lettersOnScreen = 0;
let firstLetterChecker = true;

function setFirstWord(){
    addBlocks();
}

function addBlocks(){
    let word = wordContainer[wordsPassed];
    for (let i = 0; i < word.length; i++){
        let newEl = document.createElement("div");
        newEl.innerHTML = word[i];
        newEl.className = "letterBlock";
        let position = document.getElementById("letterArea");
        position.appendChild(newEl);
        lettersOnScreen++;
    }
}

function isPressedLettersOnScreen(letterPressed){
    let letters = document.getElementsByClassName("letterBlock");
    if (firstLetterChecker && letterPressed == letters[0].firstChild.nodeValue && letters.length > 1){
        for (let i = 0; i < letters.length; i++){
            if (letterPressed == letters[i].firstChild.nodeValue){
                $(letters[i]).remove();
                if(letterPressed == letters[0].firstChild.nodeValue){
                    $(letters[0]).remove();
                }
            }

        }
        firstLetterChecker = false;
        if (letters.length == 0){
            firstLetterChecker = true;
            wordsPassed++;
            gameEnd();
            addBlocks();
        }
    }

    else if (firstLetterChecker == false && letterPressed == letters[letters.length-1].lastChild.nodeValue && letters.length > 1){
        for (let i = 0; i < letters.length; i++){
            if (letterPressed == letters[i].lastChild.nodeValue){
                $(letters[i]).remove();
                if(letterPressed == letters[letters.length-1].firstChild.nodeValue){
                    $(letters[letters.length-1]).remove();
                }
            }

        }
        firstLetterChecker = true;
        if (letters.length == 0){
            firstLetterChecker = true;
            wordsPassed++;
            gameEnd();
            addBlocks();
        }
    }

    else if (letters.length <= 1 && letterPressed == letters[0].firstChild.nodeValue){
        $(letters[0]).remove();
        firstLetterChecker = true;
        wordsPassed++;
        gameEnd();
        addBlocks();
    }
}

function gameEnd(){
    if (wordsPassed == 10){
        alert("Congratulations & Celebrations, We are out of words, so You just Won!!");
    }
}