var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var apArray = [...kittens]
  apArray.push(name)
  return apArray
}

function prependKitten(name){
  var preArray = [...kittens]
  preArray.unshift(name)
  return preArray
}

function removeLastKitten(){
  var removeArray = 
  removeArray.shift()
  return removeArray
}