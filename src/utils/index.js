export function getFlatColors () {
  return {
    flatRed: '#bcd2e8',
    flatOrange: '#91bad6',
    flatPink: '#73a5c6',
    flatGreen: '#528aae',
    flatYellow: '#2e5984',
    flatBlue: '#1e3f65',
    flatPurple: '#152238',
  }
}
var counter = 0

export function getRandomElement(arr) {
  const temp = arr[counter]
  counter += 1
  if (counter >= arr.length) {
    counter = 0
  }
  return temp;
}

export function removeQuotesFromKeys (str) {
  return str.replace(/"([^(")"]+)":/g,"$1:")
}

export function addQuotesToKeys (str) {
  return str.replace(/([{,])(\s*)([A-Za-z0-9_-]+?)\s*:/g, '$1"$3":')
}