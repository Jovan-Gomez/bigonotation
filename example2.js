function printPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`) //O(n^2)
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//R= //O(n^2)
