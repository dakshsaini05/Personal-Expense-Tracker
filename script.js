// Init value of expense at 0
let totalExpense = 0;

// get the heading element
const headingEl = document.querySelector("#headingTotal");

// get the inputAmount 
const inputElement = document.querySelector("#inputAmount"); 

// get the desc element 
const inputDescEl = document.querySelector("#inputDesc");

// set the heading element to totalExpense at 0
headingEl.textContent = totalExpense;

// allExpense at one place in an array
const allExpenses = [];  

// onButtonClick add inputAmount to totalExpense
function addExpenseToTotal() {
    // create an object to put all the data in it 
    const expenseItem = {};

    // Read value from inputAmount
    const textAmount = inputElement.value;

    // Read the desc value from inputDescEl
    const textDesc = inputDescEl.value;

    // convert it to number 
    const expense = parseInt(textAmount, 10); 

    // put all data in object
    expenseItem.amount = expense;
    expenseItem.desc = textDesc;

    // console.log(expenseItem);

    allExpenses.push(expenseItem);
    console.clear();
    console.table(allExpenses);

    // add that value to totalExpense 
    totalExpense += expense;
    // console.log(totalExpense);

    // set the heading element to totalExpense
    headingEl.textContent = totalExpense;
}


//Get the btn element
const element = document.querySelector("#btnAddExpense");

// Listen to click event on btn
element.addEventListener("click", addExpenseToTotal);