// Init value of expense at 0
let totalExpense = 0;

// get the heading element
const headingEl = document.querySelector("#headingTotal");

// set the heading element to totalExpense at 0
headingEl.textContent = totalExpense;

// onButtonClick add inputAmount to totalExpense
function addExpenseToTotal() {
    // Read value from inputAmount
    const inputElement = document.querySelector("#inputAmount");
    const textAmount = inputElement.value;

    // convert it to number 
    const expense = parseInt(textAmount, 10); 

    // add that value to totalExpense 
    totalExpense += expense;
    console.log(totalExpense);

    // set the heading element to totalExpense
    headingEl.textContent = totalExpense;
}


//Get the btn element
const element = document.querySelector("#btnAddExpense");

// Listen to click event on btn
element.addEventListener("click", addExpenseToTotal);