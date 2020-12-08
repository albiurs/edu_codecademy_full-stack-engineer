// Build a Library
//
// Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.
//
// Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.
//
// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.
//
// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
// Book
//
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
//
// Movie
//
// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
//
// CD
//
// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
//
// If you’re looking for a challenge, try to create the four classes without using the steps below.
//
// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.



class Media {

    constructor(title = '') {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    getAverageRating() {
        const sum = this._ratings.reduce((a, b) => a + b, 0);
        return (sum / this._ratings.length) || 0;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }


    set isCheckedOut(newStatus) {
        this._isCheckedOut = newStatus;
    }
}



class Book extends Media {

    constructor(title = '', author = '', pages = 0) {
        super(title);
        this._author = author;
        this._pages = pages;

    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}



class Movie extends Media {

    constructor(title = '', director = '', runTime = 0) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}



class CD extends Media {

    constructor(title = '', artist = '', songs = ['']) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}


// Test Book
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


// Test Movie
const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
