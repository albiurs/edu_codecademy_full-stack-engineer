// Write a function groceries() that takes an array of object literals of grocery items.
// The function should return a string with each item separated by a comma
// except the last two items should be separated by the word 'and'.
// Make sure spaces (' ') are inserted where they are appropriate.
//
// Examples:
//
// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'
//
// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'
//
// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'



const groceries = groceryItems => {

    if(groceryItems.length > 1) {
        groceryItems[groceryItems.length - 1].item = 'and ' + groceryItems[groceryItems.length - 1].item;
        // console.log(groceryItems[groceryItems.length - 1].item);
    }

    if(groceryItems.length > 2) {
        for(let i=0; i<groceryItems.length-2; i++) {
            groceryItems[i].item = groceryItems[i].item + ',';
        }
    }

    groceryItems = groceryItems.map(el => el.item);
    // console.log(groceryItemsString);

    return groceryItems.join(' ');
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
console.log(groceries( [{item: 'Cheese Balls'}] ));