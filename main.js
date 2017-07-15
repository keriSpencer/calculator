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
topRow.appendChild(topRowElement1)

topRowElement2 = document.createElement('input')
topRowElement2.id = 'answer'
topRowElement2.className = 'topRowClass'
// topRowElement1.className = 'elementsText'
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
secondRow.appendChild(secondRowElement1)

secondRowElement2 = document.createElement('button')
secondRowElement2.id = 'eight'
secondRowElement2.className = 'secondRowClass elementsText'
secondRowElement2.innerHTML = '8'
secondRow.appendChild(secondRowElement2)

secondRowElement3 = document.createElement('button')
secondRowElement3.id = 'nine'
secondRowElement3.className = 'secondRowClass elementsText'
secondRowElement3.innerHTML = '9'
secondRow.appendChild(secondRowElement3)

secondRowElement4 = document.createElement('button')
secondRowElement4.id = 'divide'
secondRowElement4.className = 'secondRowClass elementsText'
secondRowElement4.innerHTML = '/'
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
thirdRow.appendChild(thirdRowElement1)

thirdRowElement2 = document.createElement('button')
thirdRowElement2.id = 'five'
thirdRowElement2.className = 'thirdRowClass elementsText'
thirdRowElement2.innerHTML = '5'
thirdRow.appendChild(thirdRowElement2)

thirdRowElement3 = document.createElement('button')
thirdRowElement3.id = 'six'
thirdRowElement3.className = 'thirdRowClass elementsText'
thirdRowElement3.innerHTML = '6'
thirdRow.appendChild(thirdRowElement3)

thirdRowElement4 = document.createElement('button')
thirdRowElement4.id = 'multiply'
thirdRowElement4.className = 'thirdRowClass elementsText'
thirdRowElement4.innerHTML = '*'
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
fourthRow.appendChild(fourthRowElement1)

fourthRowElement2 = document.createElement('button')
fourthRowElement2.id = 'two'
fourthRowElement2.className = 'fourthRowClass elementsText'
fourthRowElement2.innerHTML = '2'
fourthRow.appendChild(fourthRowElement2)

fourthRowElement3 = document.createElement('button')
fourthRowElement3.id = 'three'
fourthRowElement3.className = 'fourthRowClass elementsText'
fourthRowElement3.innerHTML = '3'
fourthRow.appendChild(fourthRowElement3)

fourthRowElement4 = document.createElement('button')
fourthRowElement4.id = 'minus'
fourthRowElement4.className = 'fourthRowClass elementsText'
fourthRowElement4.innerHTML = '-'
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
fifthRow.appendChild(fifthRowElement1)

fifthRowElement2 = document.createElement('button')
fifthRowElement2.id = 'dot'
fifthRowElement2.className = 'fifthRowClass elementsText'
fifthRowElement2.innerHTML = '.'
fifthRow.appendChild(fifthRowElement2)

fifthRowElement3 = document.createElement('button')
fifthRowElement3.id = 'equals'
fifthRowElement3.className = 'fifthRowClass elementsText'
fifthRowElement3.innerHTML = '='
fifthRow.appendChild(fifthRowElement3)

fifthRowElement4 = document.createElement('button')
fifthRowElement4.id = 'plus'
fifthRowElement4.className = 'fifthRowClass elementsText'
fifthRowElement4.innerHTML = '+'
fifthRow.appendChild(fifthRowElement4)

// console.log when button is pushed

function clicked() {
  var num = 7
}

console.log(clicked())

//
