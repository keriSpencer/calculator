// rebuild table in JS

let calcBody
let topRow
let topRowElement1
let topRowElement2

let secondRow
let secondRowElement1
let secondRowElement2
let secondRowElement3

let thirdRow
let thirdRowElement1
let thirdRowElement2
let thirdRowElement3
let thirdRowElement4

let fourthRow
let fourthRowElement1
let fourthRowElement2
let fourthRowElement3
let fourthRowElement4

let fifthRow
let fifthRowElement1
let fifthRowElement2
let fifthRowElement3
let fifthRowElement4

let stringToArray = function(string) {
  for (i in string) {
    if (isNaN(string[i])) {
      let numbers = string.split(string[i])
      numbers.push(string[i])
      return numbers
    }
  }
}

let add = function(a, b) {
  topRowElement2.value = parseInt(a) + parseInt(b)
}

let subtract = function(a, b) {
  topRowElement2.value = parseInt(a) - parseInt(b)
}

let multiply = function(a, b) {
  topRowElement2.value = parseInt(a) * parseInt(b)
}

let divide = function(a, b) {
  topRowElement2.value = parseInt(a) / parseInt(b)
}

let clickButton = function(e) {
  if (e.target.innerHTML === 'C') {
    topRowElement2.value = ''
  } else {
    if (e.target.innerHTML === '=') {
      let answer = topRowElement2.value
      let arrayOfNumbers = stringToArray(answer)
      if (arrayOfNumbers[2] === '+') {
        add(arrayOfNumbers[0], arrayOfNumbers[1])
      } else if (arrayOfNumbers[2] === '-') {
        subtract(arrayOfNumbers[0], arrayOfNumbers[1])
      } else if (arrayOfNumbers[2] === '/') {
        divide(arrayOfNumbers[0], arrayOfNumbers[1])
      } else {
        multiply(arrayOfNumbers[0], arrayOfNumbers[1])
      }
      console.log(arrayOfNumbers)
    } else {
      topRowElement2.value += e.target.innerHTML
    }
  }
}
//
// let divide = function() {
//   if (secondRowElement4.id = 'divide') {
//     topRowElement2.value /= topRowElement2.value
//   }
// }

// Div for entire Calculator body
calcBody = document.getElementById('calcGrid')

// Div for Top Row
topRow = document.createElement('div')
topRow.id = 'topRow'
topRow.input = 'text'
topRow.className = 'RowClass'
calcBody.appendChild(topRow)

// Nested Div for top row
topRowElement1 = document.createElement('button')
topRowElement1.id = 'clear'
topRowElement1.input = 'text'
topRowElement1.className = 'topRowClass elementsText'
topRowElement1.innerHTML = 'C'
topRowElement1.addEventListener('click', clickButton)
// topRowElement1.reset()
topRow.appendChild(topRowElement1)

topRowElement2 = document.createElement('input')
topRowElement2.id = 'answer'
topRowElement2.className = 'topRowClass'
topRowElement2.value = ''
topRow.appendChild(topRowElement2)

// Div for Second Row
secondRow = document.createElement('div')
secondRow.id = 'secondRow'
secondRow.className = 'RowClass'
calcBody.appendChild(secondRow)

// Nested Div for second row
secondRowElement1 = document.createElement('button')
secondRowElement1.id = 'seven'
secondRowElement1.className = 'secondRowClass elementsText'
secondRowElement1.innerHTML = '7'
secondRowElement1.addEventListener('click', clickButton)
secondRow.appendChild(secondRowElement1)

secondRowElement2 = document.createElement('button')
secondRowElement2.id = 'eight'
secondRowElement2.className = 'secondRowClass elementsText'
secondRowElement2.innerHTML = '8'
secondRowElement2.addEventListener('click', clickButton)
secondRow.appendChild(secondRowElement2)

secondRowElement3 = document.createElement('button')
secondRowElement3.id = 'nine'
secondRowElement3.className = 'secondRowClass elementsText'
secondRowElement3.innerHTML = '9'
secondRowElement3.addEventListener('click', clickButton)
secondRow.appendChild(secondRowElement3)

secondRowElement4 = document.createElement('button')
secondRowElement4.id = 'divide'
secondRowElement4.className = 'secondRowClass elementsText'
secondRowElement4.innerHTML = '/'
secondRowElement4.addEventListener('click', clickButton)
secondRow.appendChild(secondRowElement4)

// Div for Third Row
thirdRow = document.createElement('div')
thirdRow.id = 'thirdRow'
thirdRow.className = 'RowClass'
calcBody.appendChild(thirdRow)

// Nested Div for third row
thirdRowElement1 = document.createElement('button')
thirdRowElement1.id = 'four'
thirdRowElement1.className = 'thirdRowClass elementsText'
thirdRowElement1.innerHTML = '4'
thirdRowElement1.addEventListener('click', clickButton)
thirdRow.appendChild(thirdRowElement1)

thirdRowElement2 = document.createElement('button')
thirdRowElement2.id = 'five'
thirdRowElement2.className = 'thirdRowClass elementsText'
thirdRowElement2.innerHTML = '5'
thirdRowElement2.addEventListener('click', clickButton)
thirdRow.appendChild(thirdRowElement2)

thirdRowElement3 = document.createElement('button')
thirdRowElement3.id = 'six'
thirdRowElement3.className = 'thirdRowClass elementsText'
thirdRowElement3.innerHTML = '6'
thirdRowElement3.addEventListener('click', clickButton)
thirdRow.appendChild(thirdRowElement3)

thirdRowElement4 = document.createElement('button')
thirdRowElement4.id = 'multiply'
thirdRowElement4.className = 'thirdRowClass elementsText'
thirdRowElement4.innerHTML = 'X'
thirdRowElement4.addEventListener('click', clickButton)
thirdRow.appendChild(thirdRowElement4)

// Div for Fourth Row
fourthRow = document.createElement('div')
fourthRow.id = 'fourthRow'
fourthRow.className = 'RowClass'
calcBody.appendChild(fourthRow)

// Nested Div for fourth row
fourthRowElement1 = document.createElement('button')
fourthRowElement1.id = 'one'
fourthRowElement1.className = 'fourthRowClass elementsText'
fourthRowElement1.innerHTML = '1'
fourthRowElement1.addEventListener('click', clickButton)
fourthRow.appendChild(fourthRowElement1)

fourthRowElement2 = document.createElement('button')
fourthRowElement2.id = 'two'
fourthRowElement2.className = 'fourthRowClass elementsText'
fourthRowElement2.innerHTML = '2'
fourthRowElement2.addEventListener('click', clickButton)
fourthRow.appendChild(fourthRowElement2)

fourthRowElement3 = document.createElement('button')
fourthRowElement3.id = 'three'
fourthRowElement3.className = 'fourthRowClass elementsText'
fourthRowElement3.innerHTML = '3'
fourthRowElement3.addEventListener('click', clickButton)
fourthRow.appendChild(fourthRowElement3)

fourthRowElement4 = document.createElement('button')
fourthRowElement4.id = 'minus'
fourthRowElement4.className = 'fourthRowClass elementsText'
fourthRowElement4.innerHTML = '-'
fourthRowElement4.addEventListener('click', clickButton)
fourthRow.appendChild(fourthRowElement4)

// Div for Fifth Row
fifthRow = document.createElement('div')
fifthRow.id = 'fifthRow'
fifthRow.className = 'RowClass'
calcBody.appendChild(fifthRow)

// Nested Div for fifth row
fifthRowElement1 = document.createElement('button')
fifthRowElement1.id = 'zero'
fifthRowElement1.className = 'fifthRowClass elementsText'
fifthRowElement1.innerHTML = '0'
fifthRowElement1.addEventListener('click', clickButton)
fifthRow.appendChild(fifthRowElement1)

fifthRowElement2 = document.createElement('button')
fifthRowElement2.id = 'dot'
fifthRowElement2.className = 'fifthRowClass elementsText'
fifthRowElement2.innerHTML = '.'
fifthRowElement2.addEventListener('click', clickButton)
fifthRow.appendChild(fifthRowElement2)

fifthRowElement3 = document.createElement('button')
fifthRowElement3.id = 'equals'
fifthRowElement3.className = 'fifthRowClass elementsText'
fifthRowElement3.innerHTML = '='
fifthRowElement3.addEventListener('click', clickButton)

fifthRow.appendChild(fifthRowElement3)

fifthRowElement4 = document.createElement('button')
fifthRowElement4.id = 'plus'
fifthRowElement4.className = 'fifthRowClass elementsText'
fifthRowElement4.innerHTML = '+'
fifthRowElement4.addEventListener('click', clickButton)
fifthRow.appendChild(fifthRowElement4)

//
