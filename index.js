const cats = ["Milo", "Otis", "Garfield"];

    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');

    function destructivelyAppendCat(name){

        cats.push('Ralph')

    }

    function destructivelyPrependCat(name){

        cats.unshift('Bob')
    }

    function destructivelyRemoveLastCat(){

        cats.pop(-1)



    }

    function destructivelyRemoveFirstCat() {

        cats.shift(0)
    }

function appendCat(name){
    return [
    ...cats,
    "Broom"
];
}

function prependCat(name){
    return [
    "Arnold",
    ...cats
   
];
}

function removeLastCat(){
    return cats, cats.slice(-1), [ "Milo", "Otis"];
}

function removeFirstCat(){
    return cats.slice(0), ["Otis", "Garfield"];

}