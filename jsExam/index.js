//1.

array = []

for (let j = 0; j <= 10; j++) {
    array[j] = Math.round(Math.random()*90+10)
}

//a
console.log(array)

//b
array.sort()

console.log(array)

//c
array.reverse()

console.log(array)

//d
array.shift();
array.pop();

console.log(array)

//e
array.unshift(Math.round(Math.random()*90+10));
array.unshift(Math.round(Math.random()*90+10));
array.push(array.unshift(Math.round(Math.random()*90+10)))

console.log(array)

//2.

function Tantargy(nev, oktato, hely, koltseg = 2000){
    this.nev = nev
    this.oktato = oktato
    this.hely = hely
    this.koltseg = koltseg
}

tantargy1 = new Tantargy("Sajt", "Bela", "Mars")
tantargy2 = new Tantargy("Kenyer", "Sanyi", "Uranus")

console.log(tantargy1)
console.log(tantargy2)

tantargy1.oktato = "Janos"

console.log(tantargy1)

tantargy1.koltseg = 600

console.log(tantargy1)

//3

const array2 = ["a", "b", "c", "d", "e"]

array2obj = {}

for (let y of array2.keys()) {
    console.log(array2[y])
}

//4

const fourObj = {
    Andras: {
        Kiadas: 3482,
        Bevetel: 468,
    },
    Bela: {
        Kiadas: 177,
        Bevetel: 42580,
    },
    Andrea: {
        Kiadas: 8357,
        Bevetel: 7358,
    },
    Ferenc: {
        Kiadas: 793535,
        Bevetel: 637,
    }
}

fourObj.Marianna = {
    Kiadas: 13536,
    Bevetel: 215436,
}

console.table(fourObj)

//5

animalMap = new Map([
    ["Zsiraf", Math.round(Math.random()*1000+10)],
    ["Zebra", Math.round(Math.random()*1000+10)],
    ["Lo", Math.round(Math.random()*1000+10)],
    ["Kutya", Math.round(Math.random()*1000+10)],
    ["Cica", Math.round(Math.random()*1000+10)],
    ["Papagaj", Math.round(Math.random()*1000+10)],
])

console.table(animalMap)

//c
console.log(typeof animalMap)
console.log(animalMap instanceof Map)

//d
console.log(animalMap.size)

//e
animalMap.delete("Cica")

console.table(animalMap)

//f
animalMap.clear();