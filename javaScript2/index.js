const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.table(fruits);
fruits.shift(); //remove from the top
console.table(fruits);
fruits.unshift("Lemon", "Pineapple");
console.table(fruits);
fruits.pop(); //remove from the bottom
console.table(fruits);

tomb3 = [[1, 2, 3], ["a", "b", "c"], ["I", "II", "III"]] //3x3 array
console.table(tomb3);

let text = fruits.toString(); //make string
text += ",Kiwi"; //add to string
console.log(text);

let text2 = fruits.join(" es "); //add text between elements
console.log(text2);

tesiObj = {
    Aladar : 3,
    Béla : 5,
    Csicsol : 1,
};
console.log(tesiObj.Aladar);
tesiObj.Béla = 4;
console.log(tesiObj.Béla);

oszaly = {
    Aladar: {
        Tesi: 5,
        Magyar: 2,
        Matek: 3,
    },
    Bela: {
        Tesi: 2,
        Magyar: 4,
        Matek: 5,
    },
}

console.table(oszaly);

oszaly.Denes = {Tesi: 2,Magyar: 5,Matek: 1,} //add new

console.table(oszaly);

for (let x of fruits.keys()){ //lenght basically
    console.log(fruits[x])
};

function employee(name, jobtitle, born, salary = 200000){
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
    this.salary = salary;
}

const newEmployee = new employee("Jake", "GypsyKiller", 1999, 250000);
console.log(newEmployee);
const newEmployee2 = new employee("Gazsi", "Csoves", 1899)
console.log(newEmployee2);