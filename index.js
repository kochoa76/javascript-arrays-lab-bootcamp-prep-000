const app = "I don't do much."
var kittens= [
  "Milo",
  "Otis",
  "Garfield",]
  
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift()
  return kittens;
}

function appendKitten(kittens, name) {
  return [kittens, ... name];
}