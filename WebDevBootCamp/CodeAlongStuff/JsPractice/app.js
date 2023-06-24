let demo = 1;
const square = {
    area(l) {
        return l * l;
    },

    perimeter(l) {
        return 4 * l;
    }
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        return this.eggCount += 1;
    }
}

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map((n) => {
    return n.first;
})


function validUserNames(usernames) {
    // your code here
    return usernames.filter((n) => n.length < 10);
}

const allEven = (n) => {
    console.log(n);
    return n.length % 2 == 0 ? true : false
}