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
calcBody.appendChild(topRow)

// Nested Div for top row
topRowElement1 = document.createElement('div')
topRowElement1.id = 'clear'
topRow.appendChild(topRowElement1)

topRowElement2 = document.createElement('div')
topRowElement2.id = 'answer'
topRow.appendChild(topRowElement2)

// Div for Second Row
secondRow = document.createElement('div')
secondRow.id = 'secondRow'
calcBody.appendChild(secondRow)

// Nested Div for second row
secondRowElement1 = document.createElement('div')
secondRowElement1.id = 'seven'
secondRow.appendChild(secondRowElement1)

secondRowElement2 = document.createElement('div')
secondRowElement2.id = 'eight'
secondRow.appendChild(secondRowElement2)

secondRowElement3 = document.createElement('div')
secondRowElement3.id = 'nine'
secondRow.appendChild(secondRowElement3)

secondRowElement4 = document.createElement('div')
secondRowElement4.id = 'divide'
secondRow.appendChild(secondRowElement4)

// Div for Third Row
thirdRow = document.createElement('div')
thirdRow.id = 'thirdRow'
calcBody.appendChild(thirdRow)

// Nested Div for third row
thirdRowElement1 = document.createElement('div')
thirdRowElement1.id = 'four'
thirdRow.appendChild(thirdRowElement1)

thirdRowElement2 = document.createElement('div')
thirdRowElement2.id = 'five'
thirdRow.appendChild(thirdRowElement2)

thirdRowElement3 = document.createElement('div')
thirdRowElement3.id = 'six'
thirdRow.appendChild(thirdRowElement3)

thirdRowElement4 = document.createElement('div')
thirdRowElement4.id = 'seven'
thirdRow.appendChild(thirdRowElement4)

// Div for Fourth Row
fourthRow = document.createElement('div')
fourthRow.id = 'fourthRow'
calcBody.appendChild(fourthRow)

// Nested Div for fourth row
fourthRowElement1 = document.createElement('div')
fourthRowElement1.id = 'one'
fourthRow.appendChild(fourthRowElement1)

fourthRowElement2 = document.createElement('div')
fourthRowElement2.id = 'two'
fourthRow.appendChild(fourthRowElement2)

fourthRowElement3 = document.createElement('div')
fourthRowElement3.id = 'three'
fourthRow.appendChild(fourthRowElement3)

fourthRowElement4 = document.createElement('div')
fourthRowElement4.id = 'minus'
fourthRow.appendChild(fourthRowElement4)

// Div for Fifth Row
fifthRow = document.createElement('div')
fifthRow.id = 'fifthRow'
calcBody.appendChild(fifthRow)

// Nested Div for fifth row
fifthRowElement1 = document.createElement('div')
fifthRowElement1.id = 'zero'
fifthRow.appendChild(fifthRowElement1)

fifthRowElement2 = document.createElement('div')
fifthRowElement2.id = 'dot'
fifthRow.appendChild(fifthRowElement2)

fifthRowElement3 = document.createElement('div')
fifthRowElement3.id = 'equals'
fifthRow.appendChild(fifthRowElement3)

fifthRowElement4 = document.createElement('div')
fifthRowElement4.id = 'plus'
fifthRow.appendChild(fifthRowElement4)

//
