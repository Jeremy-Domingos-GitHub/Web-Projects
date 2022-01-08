class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
 clear() {
     this.currentOperand = ''
     this.previousOperand = ''
     this.operation = undefined

 }

 delet(){

 }

 appendNumber(number) {
     this.currentOperand = number 

 }

 chooseOperations(operation) {

 }
 compute() {

 }

 updateDisplay() {
     this.currentOperandTextElement.innerText = this.currentOperand

 }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-all-clear]')
const deletButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const Calculatori = new Calculator(previousOperandTextElement, 
    currentOperandTextElement)

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            Calculatori.appendNumber(button.innerText)
            Calculatori.updateDisplay()
        })
    })