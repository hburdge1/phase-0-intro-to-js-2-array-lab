const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const allcats = [...cats, name];
    return allcats
}

function prependCat(name) {
    const allcats = [name, ...cats];
    return allcats
}

function removeLastCat(cats) {
    return cats.slice(0,-1)
}