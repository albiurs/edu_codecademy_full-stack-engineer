const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = aliens => {
    for(let el of aliens) {
        console.log(`Oh powerful ${el}, we humans offer our unconditional surrender!`);
    }
}

greetAliens(aliens);