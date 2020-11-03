// Meal Maker
//
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
//
//     In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!


const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
       return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
       this._courses.appetizers = appetizerIn;
    },
    get mains() {
       return this._courses.mains;
    },
    set mains(mainsIn) {
       this._courses.mains = mainsIn;
    },
    get desserts() {
       return this._courses.desserts;
    },
    set desserts(dessertsIn) {
       this._courses.desserts = dessertsIn;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
        // also try using your setter method!
        // if(courseName === 'appetizers') this.appetizers = dish;
        // if(courseName === 'mains') this.mains = dish;
        // if(courseName === 'desserts') this.desserts = dish;
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        rand = Math.floor(Math.random() * dishes.length);
        return dishes[rand];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const price = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${price}.`;
    }
};

// generate appetizers
menu.addDishToCourse('appetizers', 'Peanuts', 1);
menu.addDishToCourse('appetizers', 'Snack-Mix', 3);
menu.addDishToCourse('appetizers', 'Fruit', 2);
console.log(menu.appetizers);

// generate main menus
menu.addDishToCourse('mains', 'Pizza', 15);
menu.addDishToCourse('mains', 'Pasta', 12);
menu.addDishToCourse('mains', 'Stake with Fried Rice', 20);
console.log(menu.mains);

// generate desserts
menu.addDishToCourse('desserts', 'Soft Ice', 3);
menu.addDishToCourse('desserts', 'Cake', 4);
menu.addDishToCourse('desserts', 'Coupe de Chef', 9);
console.log(menu.desserts);

// get & log a full random menu
const randomMeal = menu.generateRandomMeal();
console.log('Random Meal is: ' + randomMeal);

